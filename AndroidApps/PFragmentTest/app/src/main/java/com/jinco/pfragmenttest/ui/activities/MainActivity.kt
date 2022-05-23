package com.jinco.pfragmenttest.ui.activities

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import androidx.fragment.app.commit
import com.jinco.pfragmenttest.R
import com.jinco.pfragmenttest.databinding.ActivityMainBinding
import com.jinco.pfragmenttest.ui.fragments.RunFragment


class MainActivity : AppCompatActivity() {
    lateinit var binding: ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        supportFragmentManager.commit {
            add(R.id.frame, RunFragment())
        }

        val titleSpinner = arrayOf("one", "two")
        val titleAdapter = ArrayAdapter(this, android.R.layout.simple_spinner_dropdown_item, titleSpinner)
        binding.spTitle.adapter = titleAdapter
    }
}