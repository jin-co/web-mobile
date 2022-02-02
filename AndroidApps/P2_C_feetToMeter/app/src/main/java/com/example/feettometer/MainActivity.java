package com.example.feettometer;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    // Fields
    EditText input;
    TextView result;
    Button calculate;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        getViews();
        onCalculatedButtonClick();
    }

    // getting views
    private void getViews () {
        input.findViewById(R.id.eTxtInput);
        result.findViewById(R.id.txtResult);
        calculate.findViewById(R.id.btnCalculate);
    }

    // click listener
    private void onCalculatedButtonClick() {
        calculate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                calculate();
            }
        });
    }

    // calculate
    private void calculate() {
        Toast.makeText(this, "Go", Toast.LENGTH_LONG).show();
    }
}