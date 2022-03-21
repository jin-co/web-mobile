package com.example.tictactoeapp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.SimpleAdapter;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.logging.Logger;

public class SelectFirstPlayerActivity extends AppCompatActivity {

    private ListView list_view_player;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_select_first_player);

        list_view_player = (ListView) findViewById(R.id.list_view_player);

//        DBHelper dbHelper = new DBHelper(SelectFirstPlayerActivity.this);
//        List<Player> players = dbHelper.getPlayers();
//        Log.e("h", players.toString());


        DBHelper dbHelper = new DBHelper(SelectFirstPlayerActivity.this);
        ArrayList<HashMap<String, String>> data = dbHelper.getPlayers();

        // create the resource, from, and to variables
        int resource = R.layout.listview_item;
        String[] from = {"name"};
        int[] to = {R.id.nameTextView};

        // create and set the adapter
        SimpleAdapter adapter =
                new SimpleAdapter(this, data, resource, from, to);
        list_view_player.setAdapter(adapter);
    }
}