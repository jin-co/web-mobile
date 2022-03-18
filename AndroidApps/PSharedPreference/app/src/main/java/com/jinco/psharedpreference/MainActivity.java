package com.jinco.psharedpreference;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    EditText name, email;
    Button btn, btn2;
    SharedPreferences sp;
    String nameInput, emailInput;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        name = findViewById(R.id.editTextTextPersonName);
        email = findViewById(R.id.editTextTextPersonName2);
        btn = findViewById(R.id.button);
        btn2 = findViewById(R.id.button2);
        sp = getSharedPreferences("p", Context.MODE_PRIVATE);

        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                nameInput = name.getText().toString();
                emailInput = email.getText().toString();

                SharedPreferences.Editor editor = sp.edit();
                editor.putString("name", nameInput);
                editor.putString("email", emailInput);
                editor.commit();
                Toast.makeText(MainActivity.this, "Information Saved.", Toast.LENGTH_LONG).show();
            }
        });

        btn2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MainActivity.this, OtherPage.class);
                startActivity(intent);
            }
        });
    }
}