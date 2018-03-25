package com.rns3_bw;

import android.util.Log;

import com.google.android.gms.iid.InstanceID;
import com.google.android.gms.iid.InstanceIDListenerService;

import java.io.IOException;

/**
 * Created by chris on 3/24/2018.
 */

public class MyInstanceIDListenerService extends InstanceIDListenerService {
    @Override
    public void onTokenRefresh() {
        Log.d("GCM_TOKEN_REFRESH", "GCM TOKEN REFRESH");
        String authorizedEntity = "489007047017"; // Project id from Google Developer Console
        String scope = "GCM";
        try {
            String token = InstanceID.getInstance(this).getToken(authorizedEntity, scope);
            // send to server
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
