package com.jinco.recordkeeperpractice_2

import android.content.Intent
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.jinco.recordkeeperpractice_2.databinding.ActivityPreviewBinding

class PreviewActivity : AppCompatActivity() {
    lateinit var message:Message
    private lateinit var binding: ActivityPreviewBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityPreviewBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)

        viewMessage()
        binding.btnSend.setOnClickListener{sendMessage()}
    }

    private fun sendMessage() {
        val intent = Intent(Intent.ACTION_SENDTO).apply {
            data = Uri.parse("smsto: ")
            putExtra("sms_body", "${binding.tvSummary.text}")
        }
        startActivity(intent)
    }

    private fun viewMessage() {
        message = intent.getSerializableExtra("message") as Message
        binding.tvSummary.text = "$message.contactName"
    }
}