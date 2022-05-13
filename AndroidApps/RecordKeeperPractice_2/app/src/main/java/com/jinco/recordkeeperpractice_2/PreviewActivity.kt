package com.jinco.recordkeeperpractice_2

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.jinco.recordkeeperpractice_2.databinding.ActivityPreviewBinding

class PreviewActivity : AppCompatActivity() {
    private lateinit var binding: ActivityPreviewBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityPreviewBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)


    }
}