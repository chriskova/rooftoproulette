package com.rooftoproulette.app;

import android.content.Context;
import android.os.PowerManager;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.Iterator;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import org.json.JSONObject;

/**
 * The host's "still here" while the phone's locked or the app's in the background.
 *
 * A locked phone barely runs the page, so its own check-ins and answers to followers stop after a minute or two and
 * followers see "No signal". This runs in the app itself instead: every 15 seconds it marks the live crawl as still
 * hosted and answers any follower's "are you there?", straight to the crawl's database, with the page asleep.
 * It holds a light wake lock only while it's running (host, live crawl, app not on screen), so it keeps going in a
 * pocket, and it stops itself if the crawl ends or someone else has the spin.
 */
class HostBeat {
    static final long EVERY_S = 15;
    private static ScheduledExecutorService ex;
    private static PowerManager.WakeLock lock;
    private static String project, apiKey, liveId, uid, idToken, refreshToken;
    private static long tokenAt = 0;

    static synchronized void start(Context ctx, String p, String key, String live, String u, String id, String refresh) {
        stop();
        project = p; apiKey = key; liveId = live; uid = u; idToken = id; refreshToken = refresh; tokenAt = System.currentTimeMillis();
        try {
            PowerManager pm = (PowerManager) ctx.getSystemService(Context.POWER_SERVICE);
            lock = pm.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "rr:hostbeat");
            lock.setReferenceCounted(false);
            lock.acquire(4 * 60 * 60 * 1000L);   // never longer than a crawl
        } catch (Exception ignore) {}
        ex = Executors.newSingleThreadScheduledExecutor();
        ex.scheduleWithFixedDelay(HostBeat::beat, 0, EVERY_S, TimeUnit.SECONDS);
    }

    static synchronized void stop() {
        if (ex != null) { ex.shutdownNow(); ex = null; }
        try { if (lock != null && lock.isHeld()) lock.release(); } catch (Exception ignore) {}
        lock = null;
    }

    private static String docUrl() {
        return "https://firestore.googleapis.com/v1/projects/" + project + "/databases/(default)/documents/live/" + liveId;
    }

    private static void beat() {
        try {
            if (System.currentTimeMillis() - tokenAt > 45 * 60 * 1000L) refresh();
            // who's asked "are you there?" since the last answer
            JSONObject doc = new JSONObject(http("GET", docUrl() + "?mask.fieldPaths=host&mask.fieldPaths=ended&mask.fieldPaths=members&mask.fieldPaths=pongs", null));
            JSONObject f = doc.optJSONObject("fields");
            if (f == null) { stop(); return; }
            String host = f.has("host") ? f.getJSONObject("host").optString("stringValue", "") : "";
            boolean ended = f.has("ended") && f.getJSONObject("ended").optBoolean("booleanValue", false);
            if (!uid.equals(host) || ended) { stop(); return; }
            JSONObject pongs = new JSONObject();
            JSONObject old = f.has("pongs") ? f.getJSONObject("pongs").optJSONObject("mapValue") : null;
            JSONObject oldF = old != null ? old.optJSONObject("fields") : null;
            if (oldF != null) pongs = new JSONObject(oldF.toString());
            boolean answer = false;
            JSONObject mem = f.has("members") ? f.getJSONObject("members").optJSONObject("mapValue") : null;
            JSONObject memF = mem != null ? mem.optJSONObject("fields") : null;
            if (memF != null) {
                Iterator<String> it = memF.keys();
                while (it.hasNext()) {
                    String u = it.next();
                    JSONObject m = memF.getJSONObject(u).optJSONObject("mapValue");
                    JSONObject mf = m != null ? m.optJSONObject("fields") : null;
                    if (mf == null || !mf.has("ping")) continue;
                    String ping = num(mf.getJSONObject("ping"));
                    if (ping == null || ping.equals("0")) continue;
                    String had = pongs.has(u) ? num(pongs.getJSONObject(u)) : null;
                    if (!ping.equals(had)) { pongs.put(u, new JSONObject().put("integerValue", ping)); answer = true; }
                }
            }
            JSONObject fields = new JSONObject().put("beat", new JSONObject().put("integerValue", String.valueOf(System.currentTimeMillis())));
            String mask = "?updateMask.fieldPaths=beat";
            if (answer) { fields.put("pongs", new JSONObject().put("mapValue", new JSONObject().put("fields", pongs))); mask += "&updateMask.fieldPaths=pongs"; }
            http("PATCH", docUrl() + mask, new JSONObject().put("fields", fields).toString());
        } catch (Exception e) {
            // no signal for a moment: try again next time round
        }
    }

    private static String num(JSONObject v) {
        if (v.has("integerValue")) return v.optString("integerValue");
        if (v.has("doubleValue")) return String.valueOf((long) v.optDouble("doubleValue"));
        return null;
    }

    private static void refresh() throws Exception {
        URL u = new URL("https://securetoken.googleapis.com/v1/token?key=" + URLEncoder.encode(apiKey, "UTF-8"));
        HttpURLConnection c = (HttpURLConnection) u.openConnection();
        c.setRequestMethod("POST");
        c.setDoOutput(true);
        c.setConnectTimeout(10000);
        c.setReadTimeout(10000);
        c.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
        try (OutputStream o = c.getOutputStream()) {
            o.write(("grant_type=refresh_token&refresh_token=" + URLEncoder.encode(refreshToken, "UTF-8")).getBytes("UTF-8"));
        }
        JSONObject r = new JSONObject(read(c));
        idToken = r.getString("id_token");
        if (r.has("refresh_token")) refreshToken = r.getString("refresh_token");
        tokenAt = System.currentTimeMillis();
    }

    private static String http(String method, String url, String body) throws Exception {
        HttpURLConnection c = (HttpURLConnection) new URL(url).openConnection();
        if ("PATCH".equals(method)) {
            c.setRequestMethod("POST");
            c.setRequestProperty("X-HTTP-Method-Override", "PATCH");
        } else c.setRequestMethod(method);
        c.setConnectTimeout(10000);
        c.setReadTimeout(10000);
        c.setRequestProperty("Authorization", "Bearer " + idToken);
        if (body != null) {
            c.setDoOutput(true);
            c.setRequestProperty("Content-Type", "application/json");
            try (OutputStream o = c.getOutputStream()) { o.write(body.getBytes("UTF-8")); }
        }
        if (c.getResponseCode() == 401) { refresh(); throw new Exception("token"); }
        return read(c);
    }

    private static String read(HttpURLConnection c) throws Exception {
        int code = c.getResponseCode();
        InputStream in = code >= 400 ? c.getErrorStream() : c.getInputStream();
        StringBuilder sb = new StringBuilder();
        if (in != null) try (BufferedReader r = new BufferedReader(new InputStreamReader(in, "UTF-8"))) {
            String l; while ((l = r.readLine()) != null) sb.append(l);
        }
        if (code >= 400) throw new Exception("http " + code + " " + sb);
        return sb.toString();
    }
}
