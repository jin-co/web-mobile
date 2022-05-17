package com.jinco.practiceform

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import com.jinco.practiceform.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    lateinit var binding:ActivityMainBinding
    lateinit var user: User
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)
        setupButton()
        setSpinner()
    }

    private fun setupButton() {
        binding.btnCreate.setOnClickListener {
            createAccount()
        }
    }

    private fun createAccount() {
        user = User(
            binding.etFirstName.text.toString(),
            binding.etLastName.text.toString(),
            binding.spTitle.selectedItem.toString(),
            binding.etPassword.text.toString(),
            binding.etEmail.text.toString(),
            binding.etPhone.text.toString()
        )
        val intent = Intent(this, SummaryActivity::class.java)
        intent.putExtra("user", user)
        startActivity(intent)
    }

    private fun setSpinner() {
        val titleSpinner = arrayOf("1", "2")
        val titleAdapter = ArrayAdapter(this, android.R.layout.simple_spinner_dropdown_item, titleSpinner)
        binding.spTitle.adapter = titleAdapter
    }
}