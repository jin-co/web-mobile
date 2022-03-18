package com.jinco.chatsappfinal;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import com.google.firebase.database.FirebaseDatabase;
import android.view.View;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.Toast;
import com.google.firebase.database.DatabaseReference;
import java.util.ArrayList;
import java.util.Objects;

public class ProfileActivity extends AppCompatActivity {
    private static final String activityName = "Profile";
    private static final FirebaseDatabase database = FirebaseDatabase.getInstance();
    private static final DatabaseReference myErrorRef = database.getReference().child("errors").child(activityName);
    private Error error_class = new Error();
    private mydatabase db = new mydatabase(this);
    private EditText txt_userName, txt_userAge;
    private Spinner spnr_gender;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile);
        try {
            txt_userName = findViewById(R.id.txt_userName);
            txt_userAge = findViewById(R.id.txt_userAge);
            spnr_gender = findViewById(R.id.spnr_gender);
            ArrayList<String> profile;
            String qry = "SELECT * FROM profile ORDER BY id DESC LIMIT 1";
            profile = db.getProfile(qry);
            if (profile.size() == 3) {
                txt_userName.setText(profile.get(0));
                txt_userAge.setText(profile.get(1));
                String gender = profile.get(2);
                if (gender.matches("Male"))
                    spnr_gender.setSelection(0);
                else
                    spnr_gender.setSelection(1);
            }
        } catch (Exception e) {
            String functionName = Objects.requireNonNull(new Object() {
            }.getClass().getEnclosingMethod()).getName();
            int i = 0;
            for (StackTraceElement ste : e.getStackTrace()) {
                if (ste.getClassName().contains(activityName))
                    break;
                i++;
            }
            String lineError = e.getStackTrace()[i].getLineNumber() + "";
            String msg = e.getMessage();
            error_class.sendError(myErrorRef, lineError, msg, functionName);
        }
    }

    public void save(View view) {
        try {
            String userName, userAge, userGender;
            userName = txt_userName.getText().toString().trim();
            userAge = txt_userAge.getText().toString();
            userGender = spnr_gender.getSelectedItem().toString();
            if (!userName.isEmpty() && !userAge.isEmpty()) {
                int i_userAge = Integer.parseInt(userAge);
                if (i_userAge >= 18 && i_userAge <= 99) {
                    boolean result = db.insertProfile(userName, userAge, userGender);
                    if (result) {
                        Toast.makeText(this, getResources().getString(R.string.dataSaved), Toast.LENGTH_LONG).show();
                        disable();
                    }
                } else
                    Toast.makeText(this, getResources().getString(R.string.IncorrectAge), Toast.LENGTH_LONG).show();
            } else
                Toast.makeText(this, getResources().getString(R.string.EnterAllData), Toast.LENGTH_LONG).show();
        } catch (Exception e) {
            String functionName = Objects.requireNonNull(new Object() {
            }.getClass().getEnclosingMethod()).getName();
            int i = 0;
            for (StackTraceElement ste : e.getStackTrace()) {
                if (ste.getClassName().contains(activityName))
                    break;
                i++;
            }
            String lineError = e.getStackTrace()[i].getLineNumber() + "";
            String msg = e.getMessage();
            error_class.sendError(myErrorRef, lineError, msg, functionName);
        }
    }

    public void edit(View view) {
        try {
            txt_userName.setEnabled(true);
            txt_userAge.setEnabled(true);
        } catch (Exception e) {
            String functionName = Objects.requireNonNull(new Object() {
            }.getClass().getEnclosingMethod()).getName();
            int i = 0;
            for (StackTraceElement ste : e.getStackTrace()) {
                if (ste.getClassName().contains(activityName))
                    break;
                i++;
            }
            String lineError = e.getStackTrace()[i].getLineNumber() + "";
            String msg = e.getMessage();
            error_class.sendError(myErrorRef, lineError, msg, functionName);
        }
    }

    private void disable() {
        try {
            txt_userName.setEnabled(false);
            txt_userAge.setEnabled(false);
        } catch (Exception e) {
            String functionName = Objects.requireNonNull(new Object() {
            }.getClass().getEnclosingMethod()).getName();
            int i = 0;
            for (StackTraceElement ste : e.getStackTrace()) {
                if (ste.getClassName().contains(activityName))
                    break;
                i++;
            }
            String lineError = e.getStackTrace()[i].getLineNumber() + "";
            String msg = e.getMessage();
            error_class.sendError(myErrorRef, lineError, msg, functionName);
        }
    }
}