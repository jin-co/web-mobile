package com.jinco.practicefrom2

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import com.jinco.practicefrom2.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    lateinit var binding: ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)

        setupSpinner()
        setupButton()
    }

    private fun setupButton() {
        binding.btnGo.setOnClickListener {
            goSummary()
        }
    }

    private fun goSummary() {
        val user = User(
            binding.etName.text.toString(),
            binding.etPhone.text.toString(),
            binding.spWhat.selectedItem as String,
            binding.cbGood.isChecked
        )
        val intent = Intent(this, SummaryActivity::class.java)
        intent.putExtra("user", user)
        startActivity(intent)
    }

    private fun setupSpinner() {
        val whatSpinner = arrayOf("what", "the")
        val whatAdapter = ArrayAdapter(this, android.R.layout.simple_spinner_dropdown_item, whatSpinner)
        binding.spWhat.adapter = whatAdapter
    }
}