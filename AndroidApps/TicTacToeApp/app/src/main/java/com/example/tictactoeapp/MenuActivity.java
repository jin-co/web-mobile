package com.example.tictactoeapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MenuActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_menu);
    }

    public void onPlayClick(View view) {
        Intent intent = new Intent(MenuActivity.this, GameBoardActivity.class);
        startActivity(intent);
    }

    public void onScoreClick(View view) {
        Intent intent = new Intent(MenuActivity.this, ScoreBoardActivity.class);
        startActivity(intent);
    }

    public void onAddPlayerClick(View view) {
        Intent intent = new Intent(MenuActivity.this, SelectPlayerActivity.class);
        startActivity(intent);
    }
}