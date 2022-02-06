package com.example.tictactoe;

import android.widget.Button;
import android.widget.TextView;

public class GameLogic {

    private int[][] gameBoard;
    private int player = 1;

    private Button playAgain;
    private Button home;
    private TextView playerTurn;
    private String[] defaultPlayerNames = {"Player 1", "Player 2"};

    GameLogic() {
        gameBoard = new int[3][3];
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                gameBoard[i][j] = 0;
            }
        }
    }

    public boolean updateGameBoard(int row, int col) {
        if (gameBoard[row - 1][col - 1] == 0) {
            gameBoard[row - 1][col - 1] = player;

            if (player == 1) {
                playerTurn.setText((defaultPlayerNames[1]) + "'s turn");
            } else {
                playerTurn.setText((defaultPlayerNames[0]) + "'s turn");
            }

            return true;
        } else {
            return false;
        }
    }

    public void resetGame() {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                gameBoard[i][j] = 0;
            }
        }

        player = 1;
        playerTurn.setText((defaultPlayerNames[0] + "'s turn"));
    }

    public boolean winnerCheck() {
        boolean isWinner = false;

        for (int i = 0; i < 3; i++) {
            if (gameBoard[i][0] == gameBoard[i][1]
                    && gameBoard[i][0] == gameBoard[i][2]
                    && gameBoard[i][0] != 0) {
                isWinner = true;
            }
        }

        for (int j = 0; j < 3; j++) {
            if (gameBoard[0][j] == gameBoard[1][j]
                    && gameBoard[0][j] == gameBoard[2][j]
                    && gameBoard[0][j] != 0) {
                isWinner = true;
            }
        }

        if (gameBoard[0][0] == gameBoard[1][1]
                && gameBoard[0][0] == gameBoard[2][2]
                && gameBoard[0][0] != 0) {
            isWinner = true;
        }

        if (gameBoard[2][0] == gameBoard[1][1]
                && gameBoard[2][0] == gameBoard[0][2]
                && gameBoard[2][0] != 0) {
            isWinner = true;
        }

        int boarFilled = 0;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (gameBoard[i][j] != 0) {
                    boarFilled += 1;
                }
            }
        }

        if (isWinner) {
            playerTurn.setText((defaultPlayerNames[player - 1] + " Won"));
            return true;
        } else if (boarFilled == 9) {
            playerTurn.setText("Tie");
            return  true;
        } else {
            return false;
        }

    }

    public Button getPlayAgain() {
        return playAgain;
    }

    public void setPlayAgain(Button playAgain) {
        this.playAgain = playAgain;
    }

    public Button getHome() {
        return home;
    }

    public void setDefaultPlayerNames(String[] defaultPlayerNames) {
        this.defaultPlayerNames = defaultPlayerNames;
    }

    public void setHome(Button home) {
        this.home = home;
    }

    public TextView getPlayerTurn() {
        return playerTurn;
    }

    public void setPlayerTurn(TextView playerTurn) {
        this.playerTurn = playerTurn;
    }

    public int[][] getGameBoard() {
        return gameBoard;
    }

    public int getPlayer() {
        return player;
    }

    public void setPlayer(int player) {
        this.player = player;
    }
}
