package com.jinco.practiceform

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import com.jinco.practiceform.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    lateinit var binding:ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

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

    }
}