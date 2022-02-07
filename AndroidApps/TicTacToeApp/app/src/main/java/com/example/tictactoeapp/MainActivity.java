package com.example.tictactoeapp;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    /*
    * Author: Kwangjin Baek
    * Date: 2022. Feb. 7.
    * Description: Tic Tac Toe game application
    * Enhancement:
    * - styling
    * - go back feature
    * - separate activities for start game and play game
    * */

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void onStartClick(View view) {
        Intent intent = new Intent(this, GameBoardActivity.class);
        startActivity(intent);
    }
}