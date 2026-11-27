package com.rooftoproulette.app;

import android.content.res.Configuration;
import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.view.Window;
import android.view.WindowManager;
import android.os.SystemClock;
import android.webkit.WebView;
import androidx.core.splashscreen.SplashScreen;
import android.view.View;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
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
        registerPlugin(ShareToPlugin.class);
        registerPlugin(GoogleAuthPlugin.class);    // our own: "Continue with Google" for the optional account       // our own: the crawl card share row (Stories, WhatsApp, Messages)
        super.onCreate(savedInstanceState);

        // Draw the app under the status and navigation bars on every Android version, the way Android 15+
        // does on its own. Without this, Android 14 and older put the page below the status bar AND the page
        // still added the status bar's height on top (a doubled strip at the top, e.g. on a Galaxy S20).
        edgeToEdge();

        // The app's own background behind everything from the first frame: window, status bar, navigation bar
        // and the web view itself. Cream with dark icons by default, black with light icons in dark mode.
        applyBars(getResources().getConfiguration());

        // The page lays itself out around the status bar, the camera cut-out and the navigation bar, from sizes this
        // hands it. Capacitor's own handling is off: on some phones (an older system WebView, or a reload where it
        // missed the page's settings) it pushed the whole page down below a plain strip instead.
        safeAreas();

        try {
            WebView wv = getBridge().getWebView();
            // Big system text: follow it, but cap it at 130% so the layout and main buttons still fit (what Uber and most apps do)
            android.webkit.WebSettings ws = wv.getSettings();
            if (ws.getTextZoom() > 130) ws.setTextZoom(130);
            getBridge().addWebViewListener(new WebViewListener() {
                @Override
                public void onPageLoaded(WebView webView) {
                    if (readyAt == 0) readyAt = SystemClock.uptimeMillis();
                    injectSafeAreas();
                }

                @Override
                public void onPageCommitVisible(WebView webView, String url) {
                    injectSafeAreas();
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
        // Bars stay see-through so the page shows behind them (same as Android 15+). Android 7 can't draw dark
        // navigation buttons, so it gets a light dim behind them on the cream background.
        getWindow().setStatusBarColor(Color.TRANSPARENT);
        getWindow().setNavigationBarColor(Build.VERSION.SDK_INT < 26 && !night ? Color.parseColor("#66000000") : Color.TRANSPARENT);
        WindowInsetsControllerCompat bars = new WindowInsetsControllerCompat(getWindow(), getWindow().getDecorView());
        bars.setAppearanceLightStatusBars(!night);
        bars.setAppearanceLightNavigationBars(!night);
        try { getBridge().getWebView().setBackgroundColor(bg); } catch (Exception ignored) {}
    }

    private int[] safe = null;   // top, right, bottom, left in CSS pixels

    void safeAreas() {
        View decor = getWindow().getDecorView();
        ViewCompat.setOnApplyWindowInsetsListener(decor, (v, insets) -> {
            Insets bars = insets.getInsets(WindowInsetsCompat.Type.systemBars() | WindowInsetsCompat.Type.displayCutout());
            Insets ime = insets.getInsets(WindowInsetsCompat.Type.ime());
            boolean kb = insets.isVisible(WindowInsetsCompat.Type.ime());
            // the keyboard still shrinks the page (so a text box stays above it); nothing else moves it
            v.setPadding(0, 0, 0, kb ? ime.bottom : 0);
            float d = getResources().getDisplayMetrics().density;
            int bottom = kb ? Math.max(0, bars.bottom - ime.bottom) : bars.bottom;
            safe = new int[] { Math.round(bars.top / d), Math.round(bars.right / d), Math.round(bottom / d), Math.round(bars.left / d) };
            injectSafeAreas();
            return insets;
        });
        decor.requestApplyInsets();
    }

    void injectSafeAreas() {
        final int[] s = safe;
        if (s == null) return;
        try {
            final WebView wv = getBridge().getWebView();
            final String js = "(function(){var r=document.documentElement.style;"
                + "r.setProperty('--safe-area-inset-top','" + s[0] + "px');"
                + "r.setProperty('--safe-area-inset-right','" + s[1] + "px');"
                + "r.setProperty('--safe-area-inset-bottom','" + s[2] + "px');"
                + "r.setProperty('--safe-area-inset-left','" + s[3] + "px');"
                + "window.dispatchEvent(new Event('resize'))})()";
            wv.post(() -> wv.evaluateJavascript(js, null));
        } catch (Exception ignored) {}
    }

    void edgeToEdge() {
        Window w = getWindow();
        WindowCompat.setDecorFitsSystemWindows(w, false);
        if (Build.VERSION.SDK_INT >= 28) {
            // Punch-hole and notch phones: let the page run up behind the camera cut-out too
            WindowManager.LayoutParams lp = w.getAttributes();
            lp.layoutInDisplayCutoutMode = Build.VERSION.SDK_INT >= 30
                ? WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_ALWAYS
                : WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
            w.setAttributes(lp);
        }
        if (Build.VERSION.SDK_INT >= 29) w.setStatusBarContrastEnforced(false);   // no grey film over the status bar
    }

    // The phone switched between light and dark while the app was open (the page follows it on its own)
    @Override
    public void onConfigurationChanged(Configuration c) {
        super.onConfigurationChanged(c);
        applyBars(c);
    }
}
