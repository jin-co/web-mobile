package com.jinco.ecommerceapp.UI.activites.shared

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.jinco.ecommerceapp.R
import com.jinco.ecommerceapp.databinding.ActivityProgressBarBinding

class ProgressBarActivity : AppCompatActivity() {
    lateinit var binding:ActivityProgressBarBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityProgressBarBinding.inflate(layoutInflater)
        setContentView(binding.root)
    }
}