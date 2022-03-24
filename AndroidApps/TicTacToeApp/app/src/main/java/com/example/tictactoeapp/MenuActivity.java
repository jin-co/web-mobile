package com.example.tictactoeapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
/*
* Menu class that shows all the menus and allows users to navigate
* to each menu
* */
public class MenuActivity extends AppCompatActivity {
    public static boolean playerOneSelected, playerTwoSelected = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_menu);
    }

    public void onPlayClick(View view) {
        if (!playerOneSelected) {
            Intent intent = new Intent(MenuActivity.this, SelectFirstPlayerActivity.class);
            startActivity(intent);
        } else if (!playerTwoSelected) {
            Intent intent = new Intent(MenuActivity.this, SelectSecondPlayerActivity.class);
            startActivity(intent);
        } else {
            Intent intent = new Intent(MenuActivity.this, GameBoardActivity.class);
            startActivity(intent);
        }
    }

    public void onScoreClick(View view) {
        Intent intent = new Intent(MenuActivity.this, ScoreBoardActivity.class);
        startActivity(intent);
    }

    public void onAddPlayerClick(View view) {
        Intent intent = new Intent(MenuActivity.this, AddPlayerActivity.class);
        startActivity(intent);
    }

    public void onSelectFirstPlayerClick(View view) {
        Intent intent = new Intent(MenuActivity.this, SelectFirstPlayerActivity.class);
        startActivity(intent);
    }

    public void onSelectSecondPlayerClick(View view) {
        Intent intent = new Intent(MenuActivity.this, SelectSecondPlayerActivity.class);
        startActivity(intent);
    }
}