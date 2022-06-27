package com.jinco.ecommerceapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.core.splashscreen.SplashScreen.Companion.installSplashScreen
import com.jinco.ecommerceapp.UI.activites.LoginActivity
import com.jinco.ecommerceapp.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    lateinit var binding: ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        // Handle the splash screen transition.
        val splashScreen = installSplashScreen()

        binding = ActivityMainBinding.inflate(layoutInflater)
        super.onCreate(savedInstanceState)
        setContentView(binding.root)

        binding.tvMainLogin.setOnContextClickListener {
            val intent = Intent(this@MainActivity, LoginActivity::class.java)
            startActivity(intent)
        }
    }
}