package com.rooftoproulette.app;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/**
 * The live crawl notification: one ongoing, silent notification that shows the game while the phone is in a pocket.
 * Rush Hour: a countdown to the end of the game and a bar that shrinks with it.
 * R&R: a clock counting up from when you got to the bar.
 * It uses the same id as the background-location notification, so while location tracking runs it replaces
 * that "using your location" line instead of adding a second one.
 */
@CapacitorPlugin(name = "CrawlNotify")
public class CrawlNotifyPlugin extends Plugin {

    static final int ID = 28351;                 // = BackgroundGeolocationService.NOTIFICATION_ID
    static final String CHANNEL = "crawl_live";

    // While a crawl's notification is up, nudge the page every 15 seconds. A locked phone barely runs the page's own
    // timers, so this is what keeps a host's "still here" going to followers with the phone in a pocket.
    static final long BEAT_MS = 15000;
    private final Handler beatH = new Handler(Looper.getMainLooper());
    private boolean beating = false;
    private final Runnable beat = new Runnable() {
        @Override
        public void run() {
            if (!beating) return;
            try { getBridge().getWebView().evaluateJavascript("window.__rrBeat&&window.__rrBeat()", null); } catch (Exception ignore) {}
            beatH.postDelayed(this, BEAT_MS);
        }
    };
    private void beatOn(boolean on) {
        beatH.removeCallbacks(beat);
        beating = on;
        if (on) beatH.postDelayed(beat, BEAT_MS);
    }

    private void ensureChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationManager m = (NotificationManager) getContext().getSystemService(Context.NOTIFICATION_SERVICE);
            if (m.getNotificationChannel(CHANNEL) == null) {
                NotificationChannel c = new NotificationChannel(CHANNEL, "Crawl in progress", NotificationManager.IMPORTANCE_LOW);
                c.setDescription("Time left and where you're at, while a crawl is on");
                c.setShowBadge(false);
                c.enableVibration(false);
                c.setSound(null, null);
                m.createNotificationChannel(c);
            }
        }
    }

    @PluginMethod
    public void update(PluginCall call) {
        if (!beating) beatH.post(() -> beatOn(true));
        try {
            ensureChannel();
            Context ctx = getContext();
            NotificationCompat.Builder b = new NotificationCompat.Builder(ctx, CHANNEL)
                .setSmallIcon(R.drawable.ic_stat_rr)
                .setColor(Color.parseColor("#F5B83D"))
                .setContentTitle(call.getString("title", "Rooftop Roulette"))
                .setContentText(call.getString("text", ""))
                .setOngoing(true)
                .setOnlyAlertOnce(true)
                .setSilent(true)
                .setCategory(NotificationCompat.CATEGORY_PROGRESS)
                .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
                .setPriority(NotificationCompat.PRIORITY_LOW);

            Long endsAt = call.getLong("endsAt");
            Long since = call.getLong("since");
            if (endsAt != null && endsAt > 0) {
                b.setWhen(endsAt).setShowWhen(true).setUsesChronometer(true).setChronometerCountDown(true);
            } else if (since != null && since > 0) {
                b.setWhen(since).setShowWhen(true).setUsesChronometer(true);
            } else {
                b.setShowWhen(false);
            }

            Integer max = call.getInt("max");
            Integer progress = call.getInt("progress");
            if (max != null && max > 0 && progress != null) b.setProgress(max, Math.max(0, Math.min(max, progress)), false);

            // Android 16+: ask for it to be shown as a Live Update (lock screen chip, top of the shade)
            b.getExtras().putBoolean("android.requestPromotedOngoing", true);

            PendingIntent open = actionIntent(ctx, "open", 1);
            if (open != null) {
                b.setContentIntent(open);
                b.addAction(0, "Open", open);
            }
            // Followers watch someone else's crawl: nothing for them to end
            PendingIntent end = Boolean.TRUE.equals(call.getBoolean("follower", false)) ? null : actionIntent(ctx, "end", 2);
            if (end != null) b.addAction(0, "End crawl", end);

            NotificationManagerCompat nm = NotificationManagerCompat.from(ctx);
            if (!nm.areNotificationsEnabled()) { call.resolve(); return; }
            nm.notify(ID, b.build());
            call.resolve();
        } catch (SecurityException e) {
            call.resolve();     // notifications not allowed: nothing to show
        } catch (Exception e) {
            call.reject(e.getMessage());
        }
    }

    // Buttons on the notification open the app with what was tapped; the web app takes it from there
    private PendingIntent actionIntent(Context ctx, String action, int code) {
        Intent i = ctx.getPackageManager().getLaunchIntentForPackage(ctx.getPackageName());
        if (i == null) return null;
        i.addFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        i.putExtra(EXTRA, action);
        return PendingIntent.getActivity(ctx, code, i, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
    }

    static final String EXTRA = "rr_crawl_action";

    private void deliver(Intent intent) {
        if (intent == null) return;
        String a = intent.getStringExtra(EXTRA);
        if (a == null) return;
        intent.removeExtra(EXTRA);
        JSObject d = new JSObject();
        d.put("action", a);
        notifyListeners("crawlAction", d, true);
    }

    @Override
    public void load() {
        if (getActivity() != null) deliver(getActivity().getIntent());   // app was started from the notification
    }

    @Override
    protected void handleOnNewIntent(Intent intent) {
        super.handleOnNewIntent(intent);
        deliver(intent);
    }

    /** Can the live notification actually show? App notifications on, and the crawl channel not switched off. */
    @PluginMethod
    public void status(PluginCall call) {
        JSObject r = new JSObject();
        boolean on = false, channel = true;
        try {
            on = NotificationManagerCompat.from(getContext()).areNotificationsEnabled();
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                NotificationManager m = (NotificationManager) getContext().getSystemService(Context.NOTIFICATION_SERVICE);
                NotificationChannel c = m.getNotificationChannel(CHANNEL);
                channel = c == null || c.getImportance() != NotificationManager.IMPORTANCE_NONE;
            }
        } catch (Exception ignore) {}
        r.put("enabled", on && channel);
        r.put("app", on);
        r.put("channel", channel);
        call.resolve(r);
    }

    /** When this install happened. A reinstall gets a new time; an update keeps it. The app compares it with the one it saved,
        so data Android brings back from a backup on a reinstall can be told apart from the same install carrying on. */
    @PluginMethod
    public void installInfo(PluginCall call) {
        JSObject r = new JSObject();
        try {
            r.put("first", getContext().getPackageManager().getPackageInfo(getContext().getPackageName(), 0).firstInstallTime);
        } catch (Exception e) { r.put("first", 0); }
        call.resolve(r);
    }

    /** The phone's notification settings for this app (or just the crawl channel if that's the one switched off). */
    @PluginMethod
    public void openSettings(PluginCall call) {
        try {
            Context ctx = getContext();
            Intent i;
            boolean appOn = NotificationManagerCompat.from(ctx).areNotificationsEnabled();
            if (appOn && Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                ensureChannel();
                i = new Intent(android.provider.Settings.ACTION_CHANNEL_NOTIFICATION_SETTINGS)
                    .putExtra(android.provider.Settings.EXTRA_APP_PACKAGE, ctx.getPackageName())
                    .putExtra(android.provider.Settings.EXTRA_CHANNEL_ID, CHANNEL);
            } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                i = new Intent(android.provider.Settings.ACTION_APP_NOTIFICATION_SETTINGS)
                    .putExtra(android.provider.Settings.EXTRA_APP_PACKAGE, ctx.getPackageName());
            } else {
                i = new Intent(android.provider.Settings.ACTION_APPLICATION_DETAILS_SETTINGS, android.net.Uri.parse("package:" + ctx.getPackageName()));
            }
            i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            ctx.startActivity(i);
        } catch (Exception ignore) {}
        call.resolve();
    }

    @PluginMethod
    public void clear(PluginCall call) {
        beatH.post(() -> beatOn(false));
        HostBeat.stop();
        try { NotificationManagerCompat.from(getContext()).cancel(ID); } catch (Exception ignore) {}
        call.resolve();
    }

    /** The host's check-ins while the app's not on screen (see HostBeat). on: needs the crawl and the signed-in user's tokens. */
    @PluginMethod
    public void hostBeat(PluginCall call) {
        if (Boolean.TRUE.equals(call.getBoolean("on", false))) {
            HostBeat.start(getContext(), call.getString("project"), call.getString("key"), call.getString("live"),
                call.getString("uid"), call.getString("id"), call.getString("refresh"));
        } else HostBeat.stop();
        call.resolve();
    }

    /** The app's own light/dark choice (Settings > Appearance) for the system bars behind the icons. */
    @PluginMethod
    public void setTheme(PluginCall call) {
        final boolean dark = Boolean.TRUE.equals(call.getBoolean("dark", false));
        try {
            if (getActivity() instanceof MainActivity) {
                final MainActivity a = (MainActivity) getActivity();
                a.runOnUiThread(() -> a.setAppDark(dark));
            }
        } catch (Exception ignore) {}
        call.resolve();
    }
}
