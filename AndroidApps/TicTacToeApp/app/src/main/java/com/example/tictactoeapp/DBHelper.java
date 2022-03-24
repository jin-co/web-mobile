package com.example.tictactoeapp;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.Nullable;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

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
        String createTable = "CREATE TABLE " + TABLE_PLAYER + " (" +
                COL_ID + " INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL," +
                COL_NAME + " VARCHAR NOT NULL, " +
                COL_WINS + " INTEGER NOT NULL DEFAULT 0, " +
                COL_LOSES + " INTEGER NOT NULL DEFAULT 0, " +
                COL_TIES + " INTEGER NOT NULL DEFAULT 0)";

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
// / update
    public boolean updateScores(String playerName, int wins, int loses, int ties) {
        SQLiteDatabase db = this.getWritableDatabase();
//        String updateRecore = "UPDATE " + TABLE_PLAYER + " SET " +
//                COL_WINS + " = " + wins + ", " +
//                COL_LOSES + " = " + loses + ", " +
//                COL_TIES + " = " + ties +
//                " WHERE " + COL_NAME + " = " + "'" + playerName + "'";
//        Cursor cursor = db.rawQuery(updateRecore, null);
//        cursor.close();
//        db.close();

        ContentValues values = new ContentValues();
        values.put(COL_NAME, playerName);
        values.put(COL_WINS, wins);
        values.put(COL_LOSES, loses);
        values.put(COL_TIES, ties);
        db.update(TABLE_PLAYER, values, "name = ?", new String[]{playerName});
        return true;
    }

    public boolean deletePlayer(String selectedPlayerId) {
        SQLiteDatabase db = this.getWritableDatabase();
        String delete = "DELETE FROM " +
                TABLE_PLAYER +
                " WHERE " + COL_ID + " = " + selectedPlayerId;
        Cursor cursor = db.rawQuery(delete, null);
        if (cursor.moveToFirst()) {
            return true;
        } else {
            return false;
        }
    }

    public ArrayList<HashMap<String, String>> getPlayers() {
        ArrayList<HashMap<String, String>> data =
                new ArrayList<>();
        String selectAll = "SELECT " +
                COL_ID + ", " +
                COL_NAME + ", " +
                COL_WINS + ", " +
                COL_LOSES + ", " +
                COL_TIES + " FROM " + TABLE_PLAYER + " ORDER BY " + COL_WINS + " DESC";

        SQLiteDatabase db = this.getReadableDatabase();
        Cursor cursor = db.rawQuery(selectAll, null);
        if (cursor.moveToFirst()) {
            do {
                HashMap<String, String> map = new HashMap<>();
                map.put("id", cursor.getString(0));
                map.put("name", cursor.getString(1));
                map.put("wins", cursor.getString(2));
                map.put("loses", cursor.getString(3));
                map.put("ties", cursor.getString(4));
                data.add(map);
            } while (cursor.moveToNext());
        } else {

        }
        cursor.close();
        db.close();
        return data;
    }
//
//    public List<Player> getPlayers() {
//        List<Player> players = new ArrayList<>();
//        String selectAll = "SELECT " +
//                COL_ID + ", " +
//                COL_NAME + ", " +
//                COL_WINS + ", " +
//                COL_LOSES + ", " +
//                COL_TIES + " FROM " + TABLE_PLAYER;
//
//        SQLiteDatabase db = this.getReadableDatabase();
//        Cursor cursor = db.rawQuery(selectAll, null);
//        if (cursor.moveToFirst()) {
//            do {
//                int id = cursor.getInt(0);
//                String name = cursor.getString(1);
//                int wins = cursor.getInt(2);
//                int loses = cursor.getInt(3);
//                int ties = cursor.getInt(4);
//
//                Player player = new Player(id, name, wins, loses, ties);
//                players.add(player);
//            } while (cursor.moveToNext());
//        } else {
//
//        }
//        cursor.close();
//        db.close();
//        return players;
//    }
}
