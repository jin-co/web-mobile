package com.example.tictactoe;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import androidx.annotation.Nullable;

public class DBHelper extends SQLiteOpenHelper {
    private static final String PLAYER = "player";
    private static final String ID = "id";
    private static final String NAME = "name";
    private static final String WINS = "wins";
    private static final String LOSES = "loses";
    private static final String TIES = "ties";

    public DBHelper(@Nullable Context context) {
        super(context, "tic.db", null, 1);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        String createTable = "CREATE TABLE " + PLAYER + "(" +
                ID + " INTEGER PRIMARY KEY AUTOINCREMENT," +
                NAME + " TEXT, " +
                WINS + " INT, " +
                LOSES + " INT, " +
                TIES + "s INT)";

        db.execSQL(createTable);
    }

    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i, int i1) {

    }
}
