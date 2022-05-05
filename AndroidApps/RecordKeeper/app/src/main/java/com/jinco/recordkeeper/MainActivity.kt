package com.jinco.recordkeeper

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.fragment.app.commit
import com.google.android.material.bottomnavigation.BottomNavigationView
import com.jinco.recordkeeper.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private  lateinit var binding: ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

//        supportFragmentManager.commit {
//            add(R.id.fl_content, RunningFragment())
//        }

        binding.btnRun.setOnClickListener{
            onRunClicked()
        }

        binding.btnCycle.setOnClickListener{
            onCyclingClicked()
        }
    }

    private fun onRunClicked() {
        supportFragmentManager.commit {
            replace(R.id.fl_content, RunningFragment())
        }
    }

    private fun onCyclingClicked() {
        supportFragmentManager.commit {
            replace(R.id.fl_content, RunningFragment())
        }
    }
}