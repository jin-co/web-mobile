package com.jinco.practiceform

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import com.jinco.practiceform.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    lateinit var binding: ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)

        setSpinner()
        setupButton()
    }

    private fun setupButton() {
        val user = User(
            firstName = binding.etFirstName.toString(),
            lastName = binding.etLastName.toString(),
            title = binding.spTitle.selectedItem.toString(),
            password = binding.etPassword.toString(),
            email = binding.etEmail.toString(),
            phone = binding.etPhone.toString()
        )
    }

    private fun setSpinner() {
        val titleValue = arrayOf("", "", "")
        val titleAdapter =
            ArrayAdapter(this, android.R.layout.simple_spinner_dropdown_item, titleValue)
        binding.spTitle.adapter = titleAdapter
    }
}