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
    private EditText input;
    private TextView result;
    private Button calculate;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        findViews();
        onCalculatedButtonClick();
    }

    // getting views
    private void findViews () {
        input = findViewById(R.id.eTxtInput);
        result = findViewById(R.id.txtResult);
        calculate = findViewById(R.id.btnCalculate);
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
        if (input.getText().toString().isEmpty()) {
            Toast.makeText(MainActivity.this, "Enter input", Toast.LENGTH_LONG).show();
        } else {
            double value = Double.parseDouble(input.getText().toString());
            double resultValue = value / 3.3;
            result.setText(String.valueOf(resultValue));
        }
    }
}