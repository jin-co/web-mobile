package com.example.p2bmi;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.TextView;
import android.widget.Toast;

import java.text.DecimalFormat;

public class MainActivity extends AppCompatActivity {

    // Fields (class variable)
    private TextView resultText;
    private RadioButton radMale;
    private RadioButton radFemale;
    private EditText txtAge;
    private EditText txtFeet;
    private EditText txtInch;
    private EditText txtWeight;
    private Button calculate;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main); // calling xml file

        // find views
//        TextView resultText = findViewById(R.id.txt_result);
////        resultText.setText("result");
//        RadioButton radMale = findViewById(R.id.radio_male);
//        RadioButton radFemale = findViewById(R.id.radio_female);
//        EditText txtAge = findViewById(R.id.txt_age);
//        EditText txtFeet = findViewById(R.id.txt_feet);
//        EditText txtInch = findViewById(R.id.txt_inch);
//        EditText txtWeight = findViewById(R.id.txt_weight);
//        Button calculate = findViewById(R.id.btn_cal);
        findViews();

        // event listening
        setupButtonClickListener();


        // alert
//        Toast.makeText(this, "Go", Toast.LENGTH_LONG).show();
    }

    // getting items from the screen
    private void findViews() {
        resultText = findViewById(R.id.txt_result);
        radMale = findViewById(R.id.radio_male);
        radFemale = findViewById(R.id.radio_female);
        txtAge = findViewById(R.id.txt_age);
        txtFeet = findViewById(R.id.txt_feet);
        txtInch = findViewById(R.id.txt_inch);
        txtWeight = findViewById(R.id.txt_weight);
        calculate = findViewById(R.id.btn_cal);
    }

    private void setupButtonClickListener() {
        calculate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                calculateBmi();
                int age = Integer.parseInt(txtAge.getText().toString());
                if (age >= 18) {
                    
                } else {
                    displayGuidance();
                }
            }
        });
    }

    private void displayGuidance() {
        if (radMale.isChecked()) {
            // display boy
        } else if (radFemale.isChecked()) {

        } else {

        }
    }

    private void calculateBmi() {
        int feet = Integer.parseInt(txtFeet.getText().toString());
        int inches = Integer.parseInt(txtInch.getText().toString());
        int weight = Integer.parseInt(txtWeight.getText().toString());
        int totalInches = (feet * 12) + inches;
        double heightInMeters = totalInches * 0.0254;
        double bmi = weight / (heightInMeters * heightInMeters);

        // formatting
        DecimalFormat decimalFomatter = new DecimalFormat("0.00");

        // converting to string
//        String.valueOf(bmi);

        // if
        String status;
        if (bmi < 18.5) {
            status = decimalFomatter.format(bmi) + "underweight";
        } else if (bmi > 25) {
            status = decimalFomatter.format(bmi) + "overweight";
        } else {
            status = decimalFomatter.format(bmi) + "normal";
        }

        resultText.setText("BMI: " + status);
    }

}