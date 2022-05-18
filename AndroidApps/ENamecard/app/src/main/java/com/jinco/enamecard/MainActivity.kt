package com.jinco.enamecard

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import com.jinco.enamecard.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    lateinit var binding: ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)
        setSpinner()
    }

    private fun setSpinner() {
        val jopSpinner = arrayOf("one", "two")
        val jopAdapter = ArrayAdapter(this, android.R.layout.simple_spinner_dropdown_item, jopSpinner)
        binding.spJob.adapter = jopAdapter
    }
}