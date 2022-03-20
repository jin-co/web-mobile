package com.example.tictactoeapp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class AddPlayerActivity extends AppCompatActivity {
    Button addPlayer;
    EditText playerName;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_player);

//        addPlayer = (Button) findViewById(R.id.button_add_player);
//        playerName = (EditText) findViewById(R.id.edit_text_name_new);
//
//        addPlayer.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View view) {
//                String newPlaer = playerName.getText().toString();
//                Player player = new Player(1, newPlaer);
//                Toast.makeText(AddPlayerActivity.this, "Player", Toast.LENGTH_SHORT).show();
//            }
//        });
    }
}