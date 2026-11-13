package com.rooftoproulette.app;

import android.graphics.Color;
import android.os.Bundle;
import android.os.SystemClock;
import android.webkit.WebView;
import androidx.core.splashscreen.SplashScreen;
import androidx.core.view.WindowInsetsControllerCompat;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.WebViewListener;

public class MainActivity extends BridgeActivity {
    static final int BG = Color.parseColor("#0B0D12");   // the app's black
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

        // Black behind everything from the first frame: window, status bar, navigation bar and the web view itself
        getWindow().getDecorView().setBackgroundColor(BG);
        getWindow().setStatusBarColor(BG);
        getWindow().setNavigationBarColor(BG);
        WindowInsetsControllerCompat bars = new WindowInsetsControllerCompat(getWindow(), getWindow().getDecorView());
        bars.setAppearanceLightStatusBars(false);
        bars.setAppearanceLightNavigationBars(false);

        try {
            WebView wv = getBridge().getWebView();
            wv.setBackgroundColor(BG);
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
}
