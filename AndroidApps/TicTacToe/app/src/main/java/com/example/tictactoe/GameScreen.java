package com.example.tictactoe;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class GameScreen extends AppCompatActivity {

    private GameBoard gameBoard;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_game_screen);

        Button playAgain = findViewById(R.id.button_play_again);
        Button home = findViewById(R.id.button_home);
        TextView playerTurn = findViewById(R.id.text_view_player);

//        playAgain.setVisibility(View.GONE);
//        home.setVisibility(View.GONE);

        String[] playerNames = getIntent().getStringArrayExtra("player_names");
        if (playerNames != null) {
            playerTurn.setText((playerNames[0] + "'s turn"));
        }

        gameBoard = findViewById(R.id.gameBoard);

        gameBoard.setUpGame(playAgain, home, playerTurn, playerNames);
    }


    public void playAgainButtonClick(View view) {
        gameBoard.resetGame();
        gameBoard.invalidate();
    }

    public void homeButtonClick(View view) {
        Intent homeIntent = new Intent(this, MainActivity.class);
        startActivity(homeIntent);
    }

}