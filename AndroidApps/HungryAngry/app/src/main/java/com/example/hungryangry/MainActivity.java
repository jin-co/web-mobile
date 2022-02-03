package com.example.hungryangry;

import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;

import android.os.Bundle;

public class MainActivity extends AppCompatActivity {

    // Fields
    CardView starterCard;
    CardView mainCard;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        starterCard = findViewById(R.id.card_view_starters);
        mainCard = findViewById(R.id.card_view_main);
    }
}

/*
* https://developer.android.com/jetpack/androidx/releases/cardview
*
*
* */
