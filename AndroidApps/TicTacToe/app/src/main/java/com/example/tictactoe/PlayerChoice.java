package com.example.tictactoe;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

public class PlayerChoice extends AppCompatActivity {

    private EditText player1;
    private EditText player2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_player_choice);

        player1 = findViewById(R.id.edit_text_p1);
        player2 = findViewById(R.id.edit_text_p2);
    }

    public void confirmButtonClick(View view) {
        String playerOneName = player1.getText().toString();
        String playerTwoName = player2.getText().toString();

        Intent playerChoiceIntent = new Intent(this, GameScreen.class);

        playerChoiceIntent.putExtra("player_names",
                new String[] {playerOneName, playerTwoName});
        startActivity(playerChoiceIntent);
    }
}