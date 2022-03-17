package com.jinco.chatsappfinal;

import android.content.ContentValues;
import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import androidx.annotation.Nullable;

public class dbService extends SQLiteOpenHelper {
    private long result;
    private static final String DBName = "data.db";

    public dbService(Context context) {
        super(context, DBName, null, 1);
    }

    @Override
    public void onCreate(SQLiteDatabase sqLiteDatabase) {

    }

    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i, int i1) {

    }

    private void profile(SQLiteDatabase db) {
        db.execSQL("DROP TABLE IF EXISTS profiles");
        db.execSQL("CREATE TABLE profiles(id INCREMENT PRIMARY KEY AUTOINCREMENT, name TEXT, age TEXT, gender TEXT)");
    }

    Boolean inserProfile(String name, String age, String gender) {
        SQLiteDatabase db = this.getWritableDatabase();
        ContentValues contentValues = new ContentValues();
        contentValues.put("name", name);
        contentValues.put("age", age);
        contentValues.put("gender", gender);
        result = db.insert("profiles", null, contentValues);
        return result != -1;
    }

    
}
