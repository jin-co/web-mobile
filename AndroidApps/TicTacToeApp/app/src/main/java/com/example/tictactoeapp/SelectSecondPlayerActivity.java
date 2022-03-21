package com.example.tictactoeapp;

import androidx.appcompat.app.AppCompatActivity;
import androidx.collection.SimpleArrayMap;

import android.os.Bundle;
import android.widget.ListView;
import android.widget.SimpleAdapter;

import java.util.ArrayList;
import java.util.HashMap;

public class SelectSecondPlayerActivity extends AppCompatActivity {
    ListView list_view_player;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_select_second_player);

        list_view_player = (ListView) findViewById(R.id.list_view_player);
        DBHelper dbHelper = new DBHelper(SelectSecondPlayerActivity.this);
        ArrayList<HashMap<String, String>> data =dbHelper.getPlayers();

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