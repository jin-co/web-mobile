package com.jinco.pfragmenttest

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import androidx.fragment.app.commit
import com.jinco.pfragmenttest.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    lateinit var binding:ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        supportFragmentManager.commit {
            add(R.id.frame, RunFragment())
        }

        setSpinner()
    }

    private fun setSpinner() {
        val titleSpinner = arrayOf("w", "a")
        val titleAdapter = ArrayAdapter(this, android.R.layout.simple_spinner_dropdown_item, titleSpinner)
        binding.spTitle.adapter = titleAdapter
    }
}