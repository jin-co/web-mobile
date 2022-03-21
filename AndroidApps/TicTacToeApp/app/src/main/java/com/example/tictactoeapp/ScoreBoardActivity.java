package com.example.tictactoeapp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ListView;
import android.widget.SimpleAdapter;

import java.util.ArrayList;
import java.util.HashMap;

public class ScoreBoardActivity extends AppCompatActivity {
    ListView list_view_player_score;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_score_board);

        list_view_player_score = findViewById(R.id.list_view_player_score);

        DBHelper dbHelper = new DBHelper(ScoreBoardActivity.this);

        // create a List of Map<String, ?> objects
        ArrayList<HashMap<String, String>> data = dbHelper.getPlayers();

        // create the resource, from, and to variables
        int resource = R.layout.listview_item;
        String[] from = {"name", "wins", "losses", "ties"};
        int[] to = {R.id.nameTextView, R.id.winsTextView, R.id.lossesTextView, R.id.tiesTextView};

        // create and set the adapter
        SimpleAdapter adapter =
                new SimpleAdapter(this, data, resource, from, to);
        list_view_player_score.setAdapter(adapter);
    }
}