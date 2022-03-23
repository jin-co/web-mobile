package com.example.tictactoeapp;

import androidx.appcompat.app.AppCompatActivity;
import androidx.collection.SimpleArrayMap;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import android.widget.SimpleAdapter;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.HashMap;

public class SelectSecondPlayerActivity extends AppCompatActivity {
    ListView list_view_player;

    public static int WINS;
    public static int LOSES;
    public static int TIES;

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

        // selet a player
        list_view_player.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                String playerTwo = parent.getItemAtPosition(position).toString().split(",")[2].substring(6);

                if (GameBoardActivity.playerOne == null){
                    WINS = Integer.parseInt(parent.getItemAtPosition(position).toString().split(",")[0].substring(6));
                    LOSES = Integer.parseInt(parent.getItemAtPosition(position).toString().split(",")[1].substring(6));
                    TIES = Integer.parseInt(parent.getItemAtPosition(position).toString().split(",")[3].substring(7));

                    GameBoardActivity.playerTwo = playerTwo;
                    MenuActivity.playerTwoSelected = true;

                    Intent selectFirstPlayerintent = new Intent(SelectSecondPlayerActivity.this, SelectFirstPlayerActivity.class);
                    startActivity(selectFirstPlayerintent);
                } else if (GameBoardActivity.playerOne.equals(playerTwo)) {
                    Toast.makeText(SelectSecondPlayerActivity.this, "Cannot choose the same charactor", Toast.LENGTH_SHORT);
                } else {
                    WINS = Integer.parseInt(parent.getItemAtPosition(position).toString().split(",")[0].substring(6));
                    LOSES = Integer.parseInt(parent.getItemAtPosition(position).toString().split(",")[1].substring(6));
                    TIES = Integer.parseInt(parent.getItemAtPosition(position).toString().split(",")[3].substring(7));

                    Log.e ("wins", WINS + "");
                    Log.e ("ties", LOSES + "");
                    Log.e ("loses", TIES + "");

                    Intent gameIntent = new Intent(SelectSecondPlayerActivity.this, GameBoardActivity.class);
                    GameBoardActivity.playerTwo = playerTwo;
                    MenuActivity.playerTwoSelected = true;
                    startActivity(gameIntent);
                }
            }
        });
    }
}