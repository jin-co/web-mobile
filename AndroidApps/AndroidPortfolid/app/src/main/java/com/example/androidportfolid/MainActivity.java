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
                new Project("Start", "Very First", R.drawable.getting_started),
                new Project("Vin", "Very First", R.drawable.quote),
                new Project("BMI", "Very First", R.drawable.calculator),
                new Project("Inches", "Very First", R.drawable.tape),
                new Project("Angry Hungry", "Very First", R.drawable.hungry_developer)
        };
    }
}