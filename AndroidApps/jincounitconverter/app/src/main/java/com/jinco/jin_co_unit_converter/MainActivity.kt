package com.jinco.jin_co_unit_converter

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import androidx.core.splashscreen.SplashScreen.Companion.installSplashScreen
import com.jinco.jin_co_unit_converter.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    lateinit var binding: ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        // Handle the splash screen transition.
        val splashScreen = installSplashScreen()
        binding = ActivityMainBinding.inflate(layoutInflater)
        super.onCreate(savedInstanceState)
        setContentView(binding.root)

        setUpSpinner()
    }

    private fun setUpSpinner() {
        val units = arrayOf("feet", "meter", "cm", "feet")
        val unitAdapter = ArrayAdapter(this, android.R.layout.simple_spinner_dropdown_item, units)
        binding.spUnitFrom.adapter = unitAdapter
        binding.spUnitTo.adapter = unitAdapter
    }
}