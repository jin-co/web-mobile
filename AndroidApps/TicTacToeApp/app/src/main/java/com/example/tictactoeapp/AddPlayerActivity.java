package com.example.tictactoeapp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class AddPlayerActivity extends AppCompatActivity {
    Button addPlayer;
    EditText playerName;
    DBHelper db;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_player);
        db = new DBHelper(AddPlayerActivity.this);

        addPlayer = (Button) findViewById(R.id.button_add_player);
        playerName = (EditText) findViewById(R.id.edit_text_name_new);
    }

    public void onAddClick(View view) {
        String newPlaer = playerName.getText().toString();
        Player player = null;
        DBHelper dbHelper = new DBHelper(AddPlayerActivity.this);

        try {
            player = new Player(newPlaer);
        } catch (Exception e) {
            Toast.makeText(AddPlayerActivity.this, "Error", Toast.LENGTH_SHORT).show();
        }

        boolean s = dbHelper.addOne(player);
        Toast.makeText(AddPlayerActivity.this, "New player added", Toast.LENGTH_SHORT).show();
    }
}