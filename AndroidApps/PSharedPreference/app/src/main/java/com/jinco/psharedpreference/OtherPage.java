package com.jinco.psharedpreference;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class OtherPage extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_other);
        TextView t1, t2;
        t1 = findViewById(R.id.textView3);
        t2 = findViewById(R.id.textView4);

        SharedPreferences sp = getApplicationContext().getSharedPreferences("p", Context.MODE_PRIVATE);
        String name = sp.getString("name", "");
        String email = sp.getString("email", "");
        t1.setText(name);
        t2.setText(email);
    }

}
