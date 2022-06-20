package com.jinco.ecommerceapp.UI.activites

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import com.jinco.ecommerceapp.MainActivity
import com.jinco.ecommerceapp.R

class SplashActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_splash)

        @Suppress("DEPRECATION")
        Handler().postDelayed(
            {
                startActivity(Intent(this@SplashActivity, MainActivity::class.java))
                finish()
            },
            2500
        )
    }
}