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
            buttons[i - 1].setTag("K");
            buttons[i - 1].setOnClickListener(this);
        }
        btn_reset.setOnClickListener(this);
    }

    @Override
    public void onClick(View view) {
        String btnText = ((Button) view).getText().toString();
        if (btnText == "Reset") {
            gameStatus.setText("hh");
            resetGame();
        }

        if (!gameOver) {
            if (btnText == "") {
                if (turn == 1) {
                    ((Button) view).setText("X");
                    ((Button) view).setTextColor(Color.parseColor("#ff0000"));
                    ((Button) view).setTag("X");
                    turn = 2;
                } else {
                    ((Button) view).setText("O");
                    ((Button) view).setTextColor(Color.parseColor("#0000ff"));
                    ((Button) view).setTag("O");
                    turn = 1;
                }
            }
            checkWinner();
            gameStatus.setText("Player " + turn + "'s turn");
        }
    }

    private void checkWinner() {
        Log.i("test", "first hi");
        int[][] winningPattern = {
                {0, 1, 2},
                {3, 4, 5},
                {6, 7, 8},
                {0, 3, 6},
                {1, 4, 7},
                {2, 5, 8},
                {0, 4, 8},
                {2, 4, 6}
        };

        for (int i = 0; i < winningPattern.length; i++) {
            int value1 = winningPattern[i][0];
            int value2 = winningPattern[i][1];
            int value3 = winningPattern[i][2];
//            Log.i("test",
//                    " val1: " + value1 +
//                    " val2: " + value2 +
//                    " val3: " + value3
//                    );
//
//            Log.i("test",
//                    " btnVal1: " + buttons[value1].getText().toString() +
//                            " btnVal2: " + buttons[value2].getText().toString() +
//                            " btnVal3: " + buttons[value3].getText().toString()
//            );

//            boolean equalTest = buttons[value1].getText() == buttons[value2].getText() &&
//                    buttons[value2].getText() == buttons[value3].getText();
//            Log.i("test",
//                    "Equal: " + equalTest
//            );

            boolean te = buttons[value1].getText() == "";
            Log.i("test",
                    "ValBtnText: " + value1 + " " + te
            );

            if (buttons[value1].getText() == buttons[value2].getText() &&
                    buttons[value2].getText() == buttons[value3].getText()) {


                if (buttons[value1].getText() != "") {
                    btn_reset.setText("X won" );
//                    if (buttons[value1].getText() == "x") {
//                        gameStatus.setText("X won" );
//                    } else {
//                        gameStatus.setText("Y won" );
//                    }
                }
            } else {

            }
        }
    }

    private void resetGame() {
        for (int i = 0; i < buttons.length; i++) {
            buttons[i].setText("");
        }
        turn = 1;
        gameStatus.setText("Player " + turn + "'s turn");
    }
}