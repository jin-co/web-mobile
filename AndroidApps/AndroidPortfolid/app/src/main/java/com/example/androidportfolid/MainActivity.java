package com.example.androidportfolid;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Project list
        Project[] projects = {
                new Project("Start", "Very First", 1);
                new Project("Vin", "Very First", 2);
                new Project("BMI", "Very First", 3);
                new Project("Inches", "Very First", 4);
                new Project("Angry Hungry", "Very First", 5);
        };
    }
}