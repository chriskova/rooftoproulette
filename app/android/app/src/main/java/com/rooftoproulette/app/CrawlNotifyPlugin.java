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

            Intent launch = ctx.getPackageManager().getLaunchIntentForPackage(ctx.getPackageName());
            if (launch != null) {
                launch.addFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT);
                b.setContentIntent(PendingIntent.getActivity(ctx, 1, launch, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE));
            }

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

    @PluginMethod
    public void clear(PluginCall call) {
        try { NotificationManagerCompat.from(getContext()).cancel(ID); } catch (Exception ignore) {}
        call.resolve();
    }
}
