package com.example.hungryangry;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;

public class DesertActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_desert);

        ListView desetList = findViewById(R.id.list_view_desert);

        Dish[] dishes = {
                new Dish("Melon and lemon soup", "Fresh melon and lemon combined into creamy soup", 1199),
                new Dish("Coconut and chocolate mousse", "A creamy mousse made with fresh coconut and milk chocolate", 899),
                new Dish("Spinach and cabbage wontons", "Thin wonton cases stuffed with fresh spinach and chinese cabbage", 799),
                new Dish("Broccoli and cucumber soup", "Fresh broccoli and cucumber combined into creamy soup", 899),
                new Dish("Chilli and aubergine dip", "A dip made from scotch bonnet chilli and fresh aubergine", 999),
                new Dish("Chickpea and chilli gyoza", "Thin pastry cases stuffed with fresh chickpea and green chilli", 699),
                new Dish("Sprout and pineapple soup", "Fresh sprout and pineapple combined into creamy soup", 899),
                new Dish("Egusi and borscht soup", "Egusi and borscht combined into creamy soup", 1299)
        };
//        String[] dishes = {
//            "Navratan and plantain korma",
//            "Peppercorn and crayfish toastie",
//            "Oatbran and prune buns",
//            "Chickpea and bacon burgers",
//            "Egg and cauliflower vindaloo",
//            "Tomato and chickpea penne",
//            "Tamarillo and parmesan salad",
//            "Pheasant and celery casserole",
//            "Mushroom and arugula salad",
//            "Chestnut and custard cake",
//            "Sausage and brie salad",
//            "Mozzarella and mango pizza",
//            "Bacon and apple buns",
//            "Polenta and squash crumble",
//            "Pork and lamb madras",
//            "Ricotta and jalapeno pizza",
//            "Cod and tofu curry",
//            "Chickpea and tofu toastie",
//            "Salmon and cheese spaghetti",
//            "Sage and tangerine jam"
//        };



        // turning array to a view
        ArrayAdapter<Dish> dishesAdapter = new ArrayAdapter<>(
                this, // context
                android.R.layout.simple_list_item_1,// layout file
                dishes // array
        );

        desetList.setAdapter(dishesAdapter);
    }
}