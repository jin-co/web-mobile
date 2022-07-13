package com.jinco.ecommerceapp.UI.activites

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.jinco.ecommerceapp.R
import com.jinco.ecommerceapp.databinding.ActivityForgotPasswordBinding

class ForgotPasswordActivity : AppCompatActivity() {
    lateinit var binding: ActivityForgotPasswordBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityForgotPasswordBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.tvFotgotPasswordToFindIdPage.setOnClickListener {
            val intent = Intent(this@ForgotPasswordActivity, ForgotIDActivity::class.java)
            startActivity(intent)
        }
    }
}