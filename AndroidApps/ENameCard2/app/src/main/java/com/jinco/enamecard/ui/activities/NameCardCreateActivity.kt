package com.jinco.enamecard.ui.activities

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.jinco.enamecard.R
import com.jinco.enamecard.databinding.ActivityNameCardCreateBinding

class NameCardCreateActivity : AppCompatActivity() {
    lateinit var binding:ActivityNameCardCreateBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityNameCardCreateBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)
    }
}