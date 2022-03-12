package com.example.murachlayoutme;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Spinner;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity implements AdapterView.OnItemSelectedListener {
    private Spinner spinner;
    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // spinner
        spinner = (Spinner) findViewById(R.id.spinner_main);
        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(
                this,
                R.array.locations,
                android.R.layout.simple_spinner_item
        );

        // setting resources for the spinner
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);

        spinner.setAdapter(adapter); // sets the array adapter for the spinner
        spinner.setSelection(3); // sets the default selection
        spinner.setOnItemSelectedListener(this);

        // hiding text
        /*
        * .setVisibility(View.View.GONE) / .setVisibility(View.VISIBLE
        * */

        // web View
        webView = (WebView) findViewById(R.id.web_view);
        webView.setWebViewClient(new WebViewClient()); // this loads the content on the app not the web browser
        webView.loadUrl("http://www.google.com");
        WebSettings webSettings = webView.getSettings(); // settings
        webSettings.setJavaScriptEnabled(true);
    }

    @Override
    public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
        String choice = adapterView.getItemAtPosition(i).toString();
        Toast.makeText(getApplicationContext(), choice, Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onNothingSelected(AdapterView<?> adapterView) {

    }

    // this allows to stay on the web view when back key is pressed
    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}