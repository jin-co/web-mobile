package com.jinco.pfragmenttest3.ui.activities

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.fragment.app.commit
import com.jinco.pfragmenttest3.R
import com.jinco.pfragmenttest3.databinding.ActivityMainBinding
import com.jinco.pfragmenttest3.ui.fragments.RunFragment

class MainActivity : AppCompatActivity() {
    lateinit var binding: ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        supportFragmentManager.commit {
            add(R.id.frame, RunFragment())
        }
    }
}