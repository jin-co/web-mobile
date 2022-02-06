package com.example.tictactoeapp;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Color;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class GameBoardActivity extends AppCompatActivity implements View.OnClickListener {

    private Button[] buttons = new Button[9];
    private Button btn_reset;
    int turn = 1;
    boolean gameOver = false;
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

        for (int i = 1; i < buttons.length + 1; i++) {
            String buttonId = "btn" + i;
            int resourceId = getResources().getIdentifier(buttonId, "id", getPackageName());
            buttons[i - 1] = findViewById(resourceId);
            buttons[i - 1].setOnClickListener(this);
        }
        btn_reset.setOnClickListener(this);
    }

    @Override
    public void onClick(View view) {
        String btnText = ((Button) view).getText().toString();
        gameStatus.setText("Player " + turn + "'s turn");
        if (!gameOver) {
            if (btnText == "") {
                if (turn == 1) {
                    ((Button) view).setText("X");
                    Log.i("test", view.toString());
                    ((Button) view).setTextColor(Color.parseColor("#ff0000"));
                    turn = 2;
                } else {
                    ((Button) view).setText("O");
                    ((Button) view).setTextColor(Color.parseColor("#0000ff"));
                    turn = 1;
                }
            }
            checkWinner();
        }
    }

    private void checkWinner() {
        if (buttons[0].getText() == buttons[1].getText() &&
                buttons[1].getText() == buttons[2].getText()) {
            btn_reset.setText("won");
            gameOver = true;
        }
    }
}