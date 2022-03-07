package com.example.ch03ex1invoiceme;

import androidx.appcompat.app.AppCompatActivity;

import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.KeyEvent;
import android.widget.EditText;
import android.widget.TextView;
import android.content.SharedPreferences.Editor;
import java.text.NumberFormat;

public class MainActivity extends AppCompatActivity implements TextView.OnEditorActionListener {

    // fields
    private EditText subtotalEditText;
    private TextView discountPercentTextView;
    private TextView discountAmountTextView;
    private TextView totalTextView;

    private String subtotalString;
    private SharedPreferences savedValues;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        subtotalEditText = (EditText) findViewById(R.id.subtotalEditText);
        discountPercentTextView = (TextView) findViewById(R.id.discountPercentTextView);
        discountAmountTextView = (TextView) findViewById(R.id.discountAmountTextView);
        totalTextView = (TextView) findViewById(R.id.totalTextView);

        subtotalEditText.setOnEditorActionListener(this);

        savedValues = getSharedPreferences("SavedValues", MODE_PRIVATE);
    }

    @Override
    protected void onPause() {
        Editor editor = savedValues.edit();
        editor.putString("subtotalString", subtotalString);
        editor.commit();
        super.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        subtotalString = savedValues.getString("subtotalString", "");
        subtotalEditText.setText(subtotalString);
        calculateAndDisplay();
    }

    @Override
    public boolean onEditorAction(TextView textView, int i, KeyEvent keyEvent) {
        calculateAndDisplay();
        return false;
    }

    private void calculateAndDisplay() {
        float subtotal;
        subtotalString = subtotalEditText.getText().toString();
        if (subtotalString.equals("")) {
            subtotal = 0;
        } else {
            subtotal = Float.parseFloat(subtotalString);
        }

        // get discount percent
        float discountPercent = 0;
        if (subtotal >= 200) {
            discountPercent = .2f;
        }
        else if (subtotal >= 100) {
            discountPercent = .1f;
        }
        else {
            discountPercent = 0;
        }

        // calculate discount
        float discountAmount = subtotal * discountPercent;
        float total = subtotal - discountAmount;

        NumberFormat percent = NumberFormat.getPercentInstance();
        discountPercentTextView.setText(percent.format(discountPercent));

        NumberFormat currency = NumberFormat.getCurrencyInstance();
        discountAmountTextView.setText(currency.format(discountAmount));
        totalTextView.setText(currency.format(total));
    }
}