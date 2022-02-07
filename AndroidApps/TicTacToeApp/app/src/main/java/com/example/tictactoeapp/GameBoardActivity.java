package com.example.tictactoeapp;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Color;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class GameBoardActivity extends AppCompatActivity implements View.OnClickListener {

    private Button[] buttons = new Button[9];
    int turn = 1;
    boolean gameOver = false;
    TextView gameStatus;
    private int gameIndex;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_game_board);
        findViews();
    }

    @Override
    protected void onSaveInstanceState(@NonNull Bundle outState) {
        super.onSaveInstanceState(outState);
        outState.putInt("test", turn);
        outState.putBoolean("gameover", gameOver);
        outState.putString("game_status", gameStatus.getText().toString());

        outState.putString("btn1", buttons[0].getText().toString());
        outState.putString("btn2", buttons[1].getText().toString());
        outState.putString("btn3", buttons[2].getText().toString());
        outState.putString("btn4", buttons[3].getText().toString());
        outState.putString("btn5", buttons[4].getText().toString());
        outState.putString("btn6", buttons[5].getText().toString());
        outState.putString("btn7", buttons[6].getText().toString());
        outState.putString("btn8", buttons[7].getText().toString());
        outState.putString("btn9", buttons[8].getText().toString());
    }

    @Override
    protected void onRestoreInstanceState(@NonNull Bundle savedInstanceState) {
        super.onRestoreInstanceState(savedInstanceState);
        turn = savedInstanceState.getInt("test", 0);
        gameOver = savedInstanceState.getBoolean("gameover", false);
        gameStatus.setText(savedInstanceState.getString("game_status", "Player 1 's turn"));

        buttons[0].setText(savedInstanceState.getString("btn1", ""));
        buttons[1].setText(savedInstanceState.getString("btn2", ""));
        buttons[2].setText(savedInstanceState.getString("btn3", ""));
        buttons[3].setText(savedInstanceState.getString("btn4", ""));
        buttons[4].setText(savedInstanceState.getString("btn5", ""));
        buttons[5].setText(savedInstanceState.getString("btn6", ""));
        buttons[6].setText(savedInstanceState.getString("btn7", ""));
        buttons[7].setText(savedInstanceState.getString("btn8", ""));
        buttons[8].setText(savedInstanceState.getString("btn9", ""));

        setButtonColor();
    }

    @Override
    public void onClick(View view) {
        String btnText = ((Button) view).getText().toString();

        if (!gameOver) {
            if (btnText == "") {
                if (turn == 1) {
                    ((Button) view).setText("X");
                    ((Button) view).setTextColor(Color.parseColor("#ff0000"));
                    gameIndex++;
                } else {
                    ((Button) view).setText("O");
                    ((Button) view).setTextColor(Color.parseColor("#0000ff"));
                    gameIndex++;
                }
                turn = (turn == 1) ? 2:1;
                gameStatus.setText("Player " + turn + "'s turn");
                checkWinner();
            }
        }
    }

    /* Custom Methods */

    // sets the color of the button when the activity status is changed
    private void setButtonColor() {
        for (Button btn: buttons) {
            if (btn.getText() == "X") {
                btn.setTextColor(Color.parseColor("#ff0000"));
            } else {
                btn.setTextColor(Color.parseColor("#0000ff"));
            }
        }
    }

    // finds views and adds an event to the buttons array
    private void findViews() {
        gameStatus = findViewById(R.id.txt_view_status);

        for (int i = 1; i < buttons.length + 1; i++) {
            String buttonId = "btn" + i;
            int resourceId = getResources().getIdentifier(buttonId, "id", getPackageName());
            buttons[i - 1] = findViewById(resourceId);
            buttons[i - 1].setOnClickListener(this);
        }
    }

    // checks if the game is finished
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

            if (buttons[value1].getText() == buttons[value2].getText() &&
                    buttons[value2].getText() == buttons[value3].getText()) {
                if (buttons[value1].getText() != "") {
                    turn = (turn == 1) ? 2:1;
                    gameStatus.setText("Player " + turn + " Won");
                    gameOver = true;
                }
            }

            if (gameIndex > 8) {
                gameStatus.setText("Tie");
                gameOver = true;
            }
        }
    }

    // resets game by setting values to the default values
    public void resetGame(View view) {
        for (int i = 0; i < buttons.length; i++) {
            buttons[i].setText("");
        }
        turn = 1;
        gameStatus.setText("Player " + turn + "'s turn");
        gameOver = false;
    }
}