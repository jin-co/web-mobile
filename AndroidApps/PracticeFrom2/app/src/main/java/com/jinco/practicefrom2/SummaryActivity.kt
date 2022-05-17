package com.jinco.practicefrom2

import android.content.Intent
import android.net.Uri
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

    private fun setupButton() {
        binding.btnSend.setOnClickListener {
            sendMessage()
        }
    }

    private fun sendMessage() {
        val intent = Intent(Intent.ACTION_SENDTO)
        intent.data = Uri.parse("mailto: ee")
        startActivity(intent)
    }

    private fun setupSummary() {
        val user = intent.getSerializableExtra("user") as User
        binding.tvSummary.text = "${user.name} ${user.phone} ${user.what} ${user.what}"
        setupButton()
    }
}