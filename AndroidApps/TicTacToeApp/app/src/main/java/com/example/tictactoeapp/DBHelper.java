package com.example.tictactoeapp;

import android.content.ContentValues;
import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import androidx.annotation.Nullable;

public class DBHelper extends SQLiteOpenHelper {

    private static final String TABLE_PLAYER = "player";
    private static final String COL_ID = "id";
    private static final String COL_NAME = "name";
    private static final String COL_WINS = "wins";
    private static final String COL_LOSES = "loses";
    private static final String COL_TIES = "ties";

    public DBHelper(@Nullable Context context) {
        super(context, "tic.db", null, 1);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        String createTable = "CREATE TABLE " + TABLE_PLAYER + "(" +
                COL_ID + " INTEGER PRIMARY KEY AUTOINCREMENT," +
                COL_NAME + " TEXT, " +
                COL_WINS + " INT, " +
                COL_LOSES + " INT, " +
                COL_TIES + "s INT)";

        db.execSQL(createTable);
    }

    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i, int i1) {

    }

    public boolean addOne(Player player) {
        SQLiteDatabase db = this.getWritableDatabase();
        ContentValues cv = new ContentValues();
        cv.put(COL_NAME, player.getName());
        cv.put(COL_WINS, player.getWins());
        cv.put(COL_LOSES, player.getLoses());
        cv.put(COL_TIES, player.getTies());

        long insert = db.insert(TABLE_PLAYER, null, cv);
        if (insert == -1) {
            return false;
        } else {
            return true;
        }
    }
}
