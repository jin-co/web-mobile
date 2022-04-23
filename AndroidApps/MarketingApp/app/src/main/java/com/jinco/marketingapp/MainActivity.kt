package com.jinco.marketingapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import com.google.android.material.textfield.TextInputEditText

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val btnPreview: Button = findViewById(R.id.btn_preview)
        btnPreview.setOnClickListener {
            Toast.makeText(this, "button", Toast.LENGTH_LONG).show()
        }
    }

    private fun onPreviewClicked() {
        val etContactName:TextInputEditText = findViewById(R.id.et_contact_name)
        val etContactNumber:TextInputEditText = findViewById(R.id.et_contact_number)
    }
}