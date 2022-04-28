package com.jinco.formpractice

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView

class SummaryActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_summary)

        var message = intent.getStringExtra("message")

        val summary:TextView = findViewById(R.id.tv_summary)
        summary.text = message

    }
}