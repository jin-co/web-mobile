package com.example.androidportfolid;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        RecyclerView list = findViewById(R.id.recycler_view_profile);

        // Project list
        Project[] projects = {
                new Project("Start", "Very First", R.drawable.getting_started),
                new Project("Vin", "Very First", R.drawable.quote),
                new Project("BMI", "Very First", R.drawable.calculator),
                new Project("Inches", "Very First", R.drawable.tape),
                new Project("Angry Hungry", "Very First", R.drawable.hungry_developer)
        };

        ProfileAdapter adapter = new ProfileAdapter(projects);
        list.setAdapter(adapter);
    }
}