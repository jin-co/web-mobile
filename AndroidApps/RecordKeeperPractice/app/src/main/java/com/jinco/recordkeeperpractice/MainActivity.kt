package com.jinco.recordkeeperpractice

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
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
//        val spinnerValue:Array<String> = arrayOf("developer", "engineer")
//        val spinnerAdapter = ArrayAdapter(this, android.R.layout.simple_spinner_dropdown_item, spinnerValue)
//        binding.spJob.adapter = spinnerAdapter

        val spinnerValue: Array<String> = arrayOf("w", "h")
        val spinnerAdapter =
            ArrayAdapter(this, android.R.layout.simple_spinner_dropdown_item, spinnerValue)
        binding.spJob.adapter = spinnerAdapter
    }

    private fun submitForm() {
//        var contactName = binding.etContactName.text
//        var contactNumber = binding.etContactNumber.text
//        var displayName = binding.etDisplayName.text
//        var startDate = binding.etStartDate.text
//        var junior = binding.cbJunior.isChecked
//        var job = binding.spJob.selectedItem
//        var immediate = binding.cbImmediate.isChecked
//
//        var sentence = "Hi, I am $contactName call me $displayName and" +
//                "contact me $contactNumber I am a $junior $job" +
//                "I can start $immediate or $startDate"

        val message = Message(
            binding.etContactName.text.toString(),
            binding.etContactNumber.text.toString(),
            binding.etDisplayName.text.toString(),
            binding.cbJunior.isChecked,
            binding.spJob.selectedItem.toString(),
            binding.cbImmediate.isChecked,
            binding.etStartDate.text.toString()
        )

//        val intent = Intent(this, PreviewActivity::class.java)
//        intent.putExtra("message", sentence)

        val intent = Intent(this, PreviewActivity::class.java)
        intent.putExtra("message", message)
        startActivity(intent)
    }
}