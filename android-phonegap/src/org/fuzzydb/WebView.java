/*
 * Copyright (C) 2007 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.fuzzydb;

import org.apache.cordova.DroidGap;

import android.os.Bundle;
import android.util.Log;

public class WebView extends DroidGap {

    public WebView() {
        super();
        Log.i("Phonegap", "Starting phonegap activity");
    }
 /*   @Override
    public void setContentView(int layoutResID) {
        Log.i("Phonegap", "Calling setContentView (layoutResID)");
        super.loadUrl("file:///assets/www/index.html");
    }

    @Override
    public void setContentView(android.view.View view) {
        Log.i("Phonegap", "Calling setContentView (View)");
        super.loadUrl("file:///assets/www/index.html");
    }

    @Override
    public void setContentView(android.view.View view, android.view.ViewGroup.LayoutParams params) {
        Log.i("Phonegap", "Calling setContentView (View, LayoutParams)");
        super.loadUrl("file:///assets/www/index.html");
    }

    @Override
    public void init() {
        Log.i("Phonegap", "Calling init");
        super.init();
    }*/
    @Override
    public void onCreate(Bundle savedInstanceState) {
        Log.i("Phonegap", "onCreate");
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");

    }
}