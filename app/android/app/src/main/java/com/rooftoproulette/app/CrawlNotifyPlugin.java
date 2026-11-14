package com.rooftoproulette.app;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.os.Build;
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
            PendingIntent end = actionIntent(ctx, "end", 2);
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

    @PluginMethod
    public void clear(PluginCall call) {
        try { NotificationManagerCompat.from(getContext()).cancel(ID); } catch (Exception ignore) {}
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
