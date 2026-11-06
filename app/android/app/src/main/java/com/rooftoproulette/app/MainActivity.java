package com.rooftoproulette.app;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(CrawlNotifyPlugin.class);   // our own: the live crawl notification
        super.onCreate(savedInstanceState);
    }
}
