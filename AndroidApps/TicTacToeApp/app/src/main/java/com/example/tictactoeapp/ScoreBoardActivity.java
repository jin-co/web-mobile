package com.example.tictactoeapp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import android.widget.SimpleAdapter;
import android.widget.TextView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.HashMap;

public class ScoreBoardActivity extends AppCompatActivity {
    ListView list_view_player_score;
    DBHelper dbHelper;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_score_board);

        list_view_player_score = findViewById(R.id.list_view_player_score);
        dbHelper = new DBHelper(ScoreBoardActivity.this);

        updateView();

        // delete a player
        list_view_player_score.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                String name = parent.getItemAtPosition(position).toString().split(",")[2].substring(6);
                dbHelper = new DBHelper(ScoreBoardActivity.this);
                boolean result = dbHelper.deletePlayer(name);
                if (result) {
                    Toast.makeText(ScoreBoardActivity.this, name + " deleted", Toast.LENGTH_SHORT);
                } else {
                    Toast.makeText(ScoreBoardActivity.this, "Delete error", Toast.LENGTH_SHORT);
                }
                updateView();
            }
        });
    }

    public void updateView() {
        // create a List of Map<String, ?> objects
        ArrayList<HashMap<String, String>> data = dbHelper.getPlayers();

        // create the resource, from, and to variables
        int resource = R.layout.listview_item_with_score;
        String[] from = {"name", "wins", "losses", "ties"};
        int[] to = {R.id.nameTextView, R.id.winsTextView, R.id.lossesTextView, R.id.tiesTextView};

        // create and set the adapter
        SimpleAdapter adapter =
                new SimpleAdapter(this, data, resource, from, to);
        list_view_player_score.setAdapter(adapter);
    }
}