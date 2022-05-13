package com.jinco.recordkeeperpractice_2

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import com.jinco.recordkeeperpractice_2.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private lateinit var binding:ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)
        setSpinner()
        binding.btnSubmit.setOnClickListener { onClick() }
    }

    private fun setSpinner() {
        val wha: Array<String> = arrayOf("wh", "th")
        val spinnerAdapter =
            ArrayAdapter(this, android.R.layout.simple_spinner_dropdown_item, wha)
        binding.spJob.adapter = spinnerAdapter
    }

    private fun onClick() {
        val message = Message(
            binding.etContactName.text.toString(),
            binding.etContactNumber.text.toString(),
            binding.etDisplayName.text.toString(),
            binding.spJob.selectedItem.toString(),
            binding.cbImmediate.isChecked
        )

        val intent = Intent(this, PreviewActivity::class.java)
        intent.putExtra("message", message)
        startActivity(intent)
    }
}