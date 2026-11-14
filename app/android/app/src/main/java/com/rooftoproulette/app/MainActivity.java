package com.rooftoproulette.app;

import android.content.res.Configuration;
import android.graphics.Color;
import android.os.Bundle;
import android.os.SystemClock;
import android.webkit.WebView;
import androidx.core.splashscreen.SplashScreen;
import androidx.core.view.WindowInsetsControllerCompat;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.WebViewListener;

public class MainActivity extends BridgeActivity {
    static final int BG_DARK = Color.parseColor("#0B0D12");    // the app's black (phone in dark mode)
    static final int BG_LIGHT = Color.parseColor("#FBF7F0");   // the app's cream (the default)
    private volatile long readyAt = 0;                    // when the page finished loading

    @Override
    public void onCreate(Bundle savedInstanceState) {
        // Launch screen: the icon on black stays up until the app's first screen has loaded (at most 4 s),
        // so there's never a white or half-drawn screen in between.
        SplashScreen splash = SplashScreen.installSplashScreen(this);
        final long t0 = SystemClock.uptimeMillis();
        splash.setKeepOnScreenCondition(() -> {
            long now = SystemClock.uptimeMillis();
            if (now - t0 > 4000) return false;
            return readyAt == 0 || now - readyAt < 250;    // a moment after load, so the first screen has painted
        });

        registerPlugin(CrawlNotifyPlugin.class);   // our own: the live crawl notification
        super.onCreate(savedInstanceState);

        // The app's own background behind everything from the first frame: window, status bar, navigation bar
        // and the web view itself. Cream with dark icons by default, black with light icons in dark mode.
        applyBars(getResources().getConfiguration());

        try {
            WebView wv = getBridge().getWebView();
            // Big system text: follow it, but cap it at 130% so the layout and main buttons still fit (what Uber and most apps do)
            android.webkit.WebSettings ws = wv.getSettings();
            if (ws.getTextZoom() > 130) ws.setTextZoom(130);
            getBridge().addWebViewListener(new WebViewListener() {
                @Override
                public void onPageLoaded(WebView webView) {
                    if (readyAt == 0) readyAt = SystemClock.uptimeMillis();
                }
            });
        } catch (Exception ignored) {
            readyAt = SystemClock.uptimeMillis();
        }
    }

    private Boolean appDark = null;   // set by the page once it knows Settings > Appearance; null until then

    void setAppDark(boolean dark) {
        appDark = dark;
        applyBars(getResources().getConfiguration());
    }

    static boolean isNight(Configuration c) {
        return (c.uiMode & Configuration.UI_MODE_NIGHT_MASK) == Configuration.UI_MODE_NIGHT_YES;
    }

    void applyBars(Configuration c) {
        boolean night = appDark != null ? appDark : isNight(c);
        int bg = night ? BG_DARK : BG_LIGHT;
        getWindow().getDecorView().setBackgroundColor(bg);
        getWindow().setStatusBarColor(bg);
        getWindow().setNavigationBarColor(bg);
        WindowInsetsControllerCompat bars = new WindowInsetsControllerCompat(getWindow(), getWindow().getDecorView());
        bars.setAppearanceLightStatusBars(!night);
        bars.setAppearanceLightNavigationBars(!night);
        try { getBridge().getWebView().setBackgroundColor(bg); } catch (Exception ignored) {}
    }

    // The phone switched between light and dark while the app was open (the page follows it on its own)
    @Override
    public void onConfigurationChanged(Configuration c) {
        super.onConfigurationChanged(c);
        applyBars(c);
    }
}
