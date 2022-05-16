package com.jinco.practiceform

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.jinco.practiceform.databinding.ActivitySummaryBinding

class SummaryActivity : AppCompatActivity() {
    lateinit var binding:ActivitySummaryBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySummaryBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)

        showSummary()
    }

    private fun showSummary() {
        val user = intent.getSerializableExtra("user") as User
        binding.tvSummary.text = "23hq5" + user.firstName
    }
}