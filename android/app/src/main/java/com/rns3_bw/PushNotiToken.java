package com.rns3_bw;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.android.gms.iid.InstanceID;
import com.facebook.react.bridge.Promise;

import java.io.IOException;

/**
 * Created by chris on 3/24/2018.
 */

public class PushNotiToken extends ReactContextBaseJavaModule {

    public PushNotiToken(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "PushNotiToken";
    }

    @ReactMethod
    public void genToken(Promise promise) {
        String authorizedEntity = "489007047017"; // Project id from Google Developer Console
        String scope = "GCM";
        try {
            String token = InstanceID.getInstance(getCurrentActivity()).getToken(authorizedEntity,scope);
            promise.resolve(token);
        } catch (IOException e) {
            promise.reject("IO_EXCEPTION", e);
        }
    }
}
