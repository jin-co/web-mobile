package com.example.p2bmi;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main); // calling xml file

        TextView resultText = findViewById(R.id.txt_result);
//        resultText.setText("result");

        RadioButton radMale = findViewById(R.id.radio_male);
        RadioButton radFemale = findViewById(R.id.radio_female);
        EditText txtAge = findViewById(R.id.txt_age);
        EditText txtFeet = findViewById(R.id.txt_feet);
        EditText txtInch = findViewById(R.id.txt_inch);
        EditText txtWeight = findViewById(R.id.txt_weight);
        Button calculate = findViewById(R.id.btn_cal);

        // event listening
        calculate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast.makeText(MainActivity.this, "Wow", Toast.LENGTH_LONG).show();
            }
        });


        // alert
//        Toast.makeText(this, "Go", Toast.LENGTH_LONG).show();
    }
}