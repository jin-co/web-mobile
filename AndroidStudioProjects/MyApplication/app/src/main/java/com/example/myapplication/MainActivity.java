package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    private Button _addition, _subtraction, _division, _muliplication;
    private Button n1, n2, n3, n4, n5, n6, n7, n8, n9, n0;
    private EditText et1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        _addition = (Button) findViewById(R.id.btnAdd);
        _subtraction = (Button) findViewById(R.id.btnSub);
        _division = (Button) findViewById(R.id.nSub);
        _muliplication = (Button) findViewById(R.id.btnMul);

        n1 = (Button) findViewById(R.id.n1);
        n2 = (Button) findViewById(R.id.n2);
        n3 = (Button) findViewById(R.id.n3);
        n4 = (Button) findViewById(R.id.n4);
        n5 = (Button) findViewById(R.id.n5);
        n6 = (Button) findViewById(R.id.n6);
        n7 = (Button) findViewById(R.id.n7);
        n8 = (Button) findViewById(R.id.n8);
        n9 = (Button) findViewById(R.id.n9);

        et1 = (EditText) findViewById(R.id.et1);

    }
}