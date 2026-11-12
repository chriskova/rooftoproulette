package com.rooftoproulette.app;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(CrawlNotifyPlugin.class);   // our own: the live crawl notification
        super.onCreate(savedInstanceState);
        // Big system text: follow it, but cap it at 130% so the layout and main buttons still fit (what Uber and most apps do)
        try {
            android.webkit.WebSettings ws = getBridge().getWebView().getSettings();
            if (ws.getTextZoom() > 130) ws.setTextZoom(130);
        } catch (Exception ignored) {}
    }
}
