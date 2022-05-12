package com.jinco.recordkeeperpractice

import android.content.Intent
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import com.jinco.recordkeeperpractice.databinding.ActivityMainBinding
import com.jinco.recordkeeperpractice.databinding.ActivityPreviewBinding

class PreviewActivity : AppCompatActivity() {
    private lateinit var binding: ActivityPreviewBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityPreviewBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)

        binding.btnSend.setOnClickListener { showMessage() }
    }

    private fun showMessage() {
//        val message = intent.getStringExtra("message")
        val message = intent.getSerializableExtra("message")
        Log.e("test", message.toString())
        binding.tvMessage.text = message.toString()

        val intent = Intent(Intent.ACTION_SENDTO).apply {
            data = Uri.parse("smsto: 000")
            putExtra("sms_body", "ss")
        }

        startActivity((intent))
    }
}