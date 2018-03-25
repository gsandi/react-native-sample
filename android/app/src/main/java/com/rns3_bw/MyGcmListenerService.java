package com.rns3_bw;

import android.app.NotificationManager;
import android.content.Context;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Bundle;
import android.provider.Settings;
import android.support.v4.app.NotificationCompat;
import android.util.Log;

import com.google.android.gms.gcm.GcmListenerService;

/**
 * Created by chris on 3/24/2018.
 */

public class MyGcmListenerService extends GcmListenerService {
    @Override
    public void onMessageReceived(String s, Bundle bundle) {
        Log.d("GCM_MESSAGE_RECEIVED",bundle.toString());
        NotificationCompat.Builder notiBuilder = new NotificationCompat.Builder(this)
                .setSmallIcon(R.drawable.ic_date_range_black_24dp)
                .setContentTitle("React Native Sample")
                .setContentText(bundle.getString("body"))
                .setAutoCancel(true)
                .setSound(Settings.System.DEFAULT_NOTIFICATION_URI);
        NotificationManager notiManager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
        notiManager.notify(0, notiBuilder.build());
    }

    @Override
    public void onMessageSent(String s) {
        Log.d("GCM_MESSAGE_SENT", s);
    }
}
