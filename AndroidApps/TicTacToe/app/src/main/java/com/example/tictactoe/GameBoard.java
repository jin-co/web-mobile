package com.example.tictactoe;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.util.AttributeSet;
import android.view.View;

import androidx.annotation.Nullable;

public class GameBoard extends View {

    private final int boardColor;
    private final int xColor;
    private final int oColor;
    private final int winningLineColor;

    private final Paint paint = new Paint();
    private int cellSize = getWidth() / 3;

    public GameBoard(Context context,
                     @Nullable AttributeSet attrs) {
        super(context, attrs);

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
}
