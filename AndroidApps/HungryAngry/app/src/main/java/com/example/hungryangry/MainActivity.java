package com.example.hungryangry;

import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    // Fields
    CardView starterCard;
    CardView mainCard;
    CardView desertCard;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        starterCard = findViewById(R.id.card_view_starters);
        mainCard = findViewById(R.id.card_view_main);
        desertCard = findViewById(R.id.card_view_desert);

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

        mainCard.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent mainCoursesActivityIntent = new Intent(
                        MainActivity.this, // from
                        MainCoursesActivity.class); // to
                startActivity(mainCoursesActivityIntent);
            }
        });

        desertCard.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent desertActivityIntent = new Intent(
                        MainActivity.this,
                        DesertActivity.class);
                startActivity(desertActivityIntent);
            }
        });

        TextView emailTextView = findViewById(R.id.text_view_email_address);
        emailTextView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent LaunchEmailAppIntent = new Intent(Intent.ACTION_SENDTO);
                LaunchEmailAppIntent.setData(Uri.parse("mailto:gg@g.com")); // only email apps should handle this

            }
        });
    }
}

/*
* https://developer.android.com/jetpack/androidx/releases/cardview
* https://developer.android.com/guide/components/intents-common
*
* */
