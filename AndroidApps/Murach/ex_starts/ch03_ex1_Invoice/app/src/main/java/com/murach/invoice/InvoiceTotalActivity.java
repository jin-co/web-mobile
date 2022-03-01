package com.murach.invoice;

import android.os.Bundle;
import android.app.Activity;
import android.view.KeyEvent;
import android.view.inputmethod.EditorInfo;
import android.widget.EditText;
import android.widget.TextView;

public class InvoiceTotalActivity extends Activity implements TextView.OnEditorActionListener {
	// variables
	private EditText subtotal;
	private double calculatedSubtotal;
	private TextView total;

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_invoice_total);
		subtotal = (EditText) findViewById(R.id.subtotalEditText);
		total = (TextView) findViewById(R.id.totalTextView);
		calculatedSubtotal = Integer.parseInt(subtotal.toString());

		subtotal.setOnEditorActionListener(this);
	}

	public void calculateAndDisplay() {
		if (calculatedSubtotal >= 100) {
			calculatedSubtotal = (calculatedSubtotal * 0.1);
		} else if (calculatedSubtotal >= 200) {
			calculatedSubtotal = (calculatedSubtotal * 0.2);
		}
		total.setText("$" + String.valueOf(calculatedSubtotal));
	}


	@Override
	public boolean onEditorAction(TextView textView, int i, KeyEvent keyEvent) {
		if (i == EditorInfo.IME_ACTION_DONE || i == EditorInfo.IME_ACTION_UNSPECIFIED) {
			calculateAndDisplay();
			total.setText("Run");
		}
		return false;
	}
}