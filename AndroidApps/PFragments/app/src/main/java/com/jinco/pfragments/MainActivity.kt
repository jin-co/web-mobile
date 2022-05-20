package com.jinco.pfragments

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import androidx.fragment.app.commit
import com.jinco.pfragments.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    lateinit var binding:ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)

        supportFragmentManager.commit {
            add(R.id.frame, RunFragment())
        }

        setSpinner()
    }

    private fun setSpinner() {
        val titleSpinner = arrayOf("1", "2")
        val titleAdapter = ArrayAdapter(this, android.R.layout.simple_spinner_dropdown_item, titleSpinner)
        binding.spWhat.adapter = titleAdapter
    }
}