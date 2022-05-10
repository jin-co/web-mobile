package com.jinco.recordkeeperpractice

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.EditText
import android.widget.Toast
import com.jinco.recordkeeperpractice.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)

        binding.btnSubmit.setOnClickListener { submitForm() }
    }

    private fun submitForm() {
        var contactName = binding.etContactName.text
        var contactNumber = binding.etContactNumber.text
        var displayName = binding.etDisplayName.text
        var startDate = binding.etStartDate.text
        var junior = binding.cbJunior.text
        var job = binding.spJob.selectedItem
        var immediate = binding.cbImmediate.text

        var sentence = "Hi, I am $contactName call me $displayName and" +
                "contact me $contactNumber I am a $junior $job" +
                "I can start $immediate or $startDate"
        Toast.makeText(this, sentence, Toast.LENGTH_LONG).show()
    }
}