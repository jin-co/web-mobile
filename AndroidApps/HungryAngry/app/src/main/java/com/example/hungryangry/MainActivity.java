package com.example.hungryangry;

import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

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

        // to move from one activity to another activity
        starterCard.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent startersActivityIntent = new Intent(
                        MainActivity.this, // from
                        StarterActivity.class); // to
                startActivity(startersActivityIntent);
            }
        });
    }
}

/*
* https://developer.android.com/jetpack/androidx/releases/cardview
*
*
* */
