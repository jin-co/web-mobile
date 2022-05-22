package com.jinco.pfragmenttest2.ui.activities

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.fragment.app.commit
import com.jinco.pfragmenttest2.R
import com.jinco.pfragmenttest2.databinding.ActivityMainBinding
import com.jinco.pfragmenttest2.ui.fragments.RunningFragment

class MainActivity : AppCompatActivity() {
    lateinit var binding:ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        supportFragmentManager.commit{
            add(R.id.frame, RunningFragment())
        }
    }
}