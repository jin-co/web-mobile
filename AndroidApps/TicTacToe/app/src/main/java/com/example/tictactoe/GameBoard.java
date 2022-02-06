package com.example.tictactoe;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;

import androidx.annotation.Nullable;

public class GameBoard extends View {

    private final int boardColor;
    private final int xColor;
    private final int oColor;
    private final int winningLineColor;

    private final Paint paint = new Paint();
    private int cellSize = getWidth() / 3;

    private GameLogic game;

    public GameBoard(Context context,
                     @Nullable AttributeSet attrs) {
        super(context, attrs);

        game = new GameLogic();

        TypedArray a = context.getTheme().obtainStyledAttributes(
                attrs,
                R.styleable.GameBoard,
                0,
                0);
        try {
            boardColor = a.getInteger(
                    R.styleable.GameBoard_boardColor,
                    0);
            xColor = a.getInteger(
                    R.styleable.GameBoard_xColor,
                    0);
            oColor = a.getInteger(
                    R.styleable.GameBoard_oColor,
                    0);
            winningLineColor = a.getInteger(
                    R.styleable.GameBoard_winningLineColor,
                    0);
        } finally {
            a.recycle();
        }
    }

    @Override
    protected void onMeasure(int width, int height) {
        super.onMeasure(width, height);
        int dimension = Math.min(
                getMeasuredWidth(), getMeasuredHeight());
        setMeasuredDimension(dimension, dimension);

        cellSize = dimension / 3;
    }

    @Override
    protected void onDraw(Canvas canvas) {
        paint.setStyle(Paint.Style.STROKE);
        paint.setAntiAlias(true);
        
        drawGameBoard(canvas);

        drawMarkers(canvas);
    }

    @Override
    public boolean onTouchEvent(MotionEvent e) {
        float x = e.getX();
        float y = e.getY();

        int action = e.getAction();

        if (action == MotionEvent.ACTION_DOWN) {
            int row = (int) Math.ceil(y / cellSize);
            int col = (int) Math.ceil(x / cellSize);

            if (game.updateGameBoard(row, col)) {
                invalidate();
                if (game.getPlayer() % 2 == 0) {
                    game.setPlayer(game.getPlayer() - 1);
                } else {
                    game.setPlayer(game.getPlayer() + 1);
                }
            }
            invalidate();
            return true;
        }
        return false;
    }

    private void drawGameBoard(Canvas canvas) {
        paint.setColor(boardColor);
        paint.setStrokeWidth(16);

        for (int i = 1; i < 3; i++) {
            canvas.drawLine(
                    cellSize * i,
                    0,
                    cellSize * i,
                    canvas.getWidth(),
                    paint);
        }

        for (int j = 1; j < 3; j++) {
            canvas.drawLine(
                    0,
                    cellSize * j,
                    canvas.getWidth(),
                    cellSize * j,
                    paint);
        }
    }

    private void drawMarkers(Canvas canvas) {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (game.getGameBoard()[i][j] != 0) {
                    if (game.getGameBoard()[i][j] == 1) {
                        drawX(canvas, i, j);
                    } else {
                        drawO(canvas, i, j);
                    }
                }
            }
        }
    }

    private void drawX (Canvas canvas, int row, int col) {
        paint.setColor(xColor);

        canvas.drawLine(
                (col + 1) * cellSize,
                row * cellSize,
                col * cellSize,
                (row + 1) * cellSize,
                paint);

        canvas.drawLine(
                col * cellSize,
                row * cellSize,
                (col + 1) * cellSize,
                (row + 1) * cellSize,
                paint);
    }

    private void drawO (Canvas canvas, int row, int col) {
        paint.setColor(oColor);

        canvas.drawOval(
                col * cellSize,
                row * cellSize,
                (col * cellSize + cellSize),
                (row * cellSize + cellSize),
                paint);
    }
}
