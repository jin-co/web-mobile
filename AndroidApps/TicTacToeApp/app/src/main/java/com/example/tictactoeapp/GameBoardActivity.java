package com.example.tictactoeapp;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Color;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class GameBoardActivity extends AppCompatActivity implements View.OnClickListener {

    private Button[] buttons;
    private Button btn_reset;
    TextView gameStatus;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_game_board);
        findViews();
    }

    // find views
    private void findViews() {
        gameStatus = findViewById(R.id.txt_view_status);
        btn_reset = findViewById(R.id.btn_reset);

//        buttons = new Button[] {
//                findViewById(R.id.btn1),
//                findViewById(R.id.btn2),
//                findViewById(R.id.btn3),
//                findViewById(R.id.btn4),
//                findViewById(R.id.btn5),
//                findViewById(R.id.btn6),
//                findViewById(R.id.btn7),
//                findViewById(R.id.btn8),
//                findViewById(R.id.btn9),
//        };
//
//        for (int i = 0; i < buttons.length; i++) {
//            buttons[i].setOnClickListener(this);
//        }

        for (int i = 1; i < buttons.length + 1; i++) {
            String buttonId = "btn" + i;
            int resourceId = getResources().getIdentifier(buttonId, "id", getPackageName());
            buttons[i - 1] = findViewById(resourceId);
            buttons[i - 1].setOnClickListener(this);
        }
    }

    @Override
    public void onClick(View view) {
        Log.i("test", view + "clicked");
        ((Button) view).setText("X");
        ((Button) view).setTextColor(Color.parseColor("#ff0000"));
    }
}