package com.example.tictactoeapp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import java.util.List;
import java.util.logging.Logger;

public class SelectFirstPlayerActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_select_first_player);

        DBHelper dbHelper = new DBHelper(SelectFirstPlayerActivity.this);
        List<Player> players = dbHelper.getPlayers();
        Log.e("h", players.toString());
        Toast.makeText(SelectFirstPlayerActivity.this, "test", Toast.LENGTH_SHORT);
    }
    public void onTestClick(View view) {
        Toast.makeText(SelectFirstPlayerActivity.this, "test", Toast.LENGTH_SHORT);
    }
}