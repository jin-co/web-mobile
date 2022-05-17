package com.jinco.practicefrom2

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.jinco.practicefrom2.databinding.ActivitySummaryBinding

class SummaryActivity : AppCompatActivity() {
    lateinit var binding: ActivitySummaryBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySummaryBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)

        setupSummary()
    }

    private fun setupSummary() {
        TODO("Not yet implemented")
    }
}