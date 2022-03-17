package com.jinco.chatsappfinal;

import android.bluetooth.BluetoothClass;

import com.google.firebase.database.DatabaseReference;

public class Error {
    private String brand = "unknown";
    private String m = "unknown";
    private String p = "unknown";
    private String d = "unknown";
    private String device = "unknown";

    public Error() {
    }

    void sendError(DatabaseReference errorRef,
                   String lineNum,
                   String errorMsg,
                   String functionName) {
        String key = errorRef.child(functionName).child(brand).child(device).push().getKey();
        assert key != null;
        errorRef.child(functionName).child(brand).child(device).child(key).child("msg").setValue(errorMsg);
        errorRef.child(functionName).child(brand).child(device).child(key).child("line").setValue(lineNum);
    }
}
