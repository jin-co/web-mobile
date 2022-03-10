package com.example.ch03ex1invoiceme;

import androidx.appcompat.app.AppCompatActivity;

import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.KeyEvent;
import android.widget.EditText;
import android.widget.TextView;
import android.content.SharedPreferences.Editor;
import android.widget.Toast;

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
        // to trace execution of an app two ways (Log and toast)
        // Log (tag, message: any type) -> shows on Logcat
        Log.d("In onEdit", "In the onEdit"); // message type: Debug / display color: black
        Log.e("In onEdit", "In the onEdit"); // message type: Error / display color: red
        Log.w("In onEdit", "In the onEdit"); // message type: Warn / display color: blue
        Log.i("In onEdit", "In the onEdit"); // message type: Info / display color: black

        // Toast -> shows on the screen
        /* Methods
        * makeText(context, message, length -> display duration) -> returns a Toast object
        * show() -> displays the toast
        * */
        Toast t = Toast.makeText(this, "In onEdit", Toast.LENGTH_SHORT);
        t.show();
        Toast.makeText(this, "In onEdit", Toast.LENGTH_SHORT).show();
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