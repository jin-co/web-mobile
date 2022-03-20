package com.example.tictactoeapp;

public class Player {
    private int Id;
    private String name;
    private int wins;
    private int loses;
    private int ties;

    public Player(int id, String name, int wins, int loses, int ties) {
        Id = id;
        this.name = name;
        this.wins = wins;
        this.loses = loses;
        this.ties = ties;
    }

    public Player() {
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getWins() {
        return wins;
    }

    public void setWins(int wins) {
        this.wins = wins;
    }

    public int getLoses() {
        return loses;
    }

    public void setLoses(int loses) {
        this.loses = loses;
    }

    public int getTies() {
        return ties;
    }

    public void setTies(int ties) {
        this.ties = ties;
    }

    @Override
    public String toString() {
        return "PlayerModel{" +
                "Id=" + Id +
                ", name='" + name + '\'' +
                ", wins=" + wins +
                ", loses=" + loses +
                ", ties=" + ties +
                '}';
    }
}
