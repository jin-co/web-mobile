package com.jinco.recordkeeper

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import androidx.fragment.app.commit
import com.google.android.material.bottomnavigation.BottomNavigationView
import com.jinco.recordkeeper.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity(), View.OnClickListener {
    private  lateinit var binding: ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

//        supportFragmentManager.commit {
//            add(R.id.fl_content, RunningFragment())
//        }

        binding.btnRun.setOnClickListener{
            Log.e("btnRun", "run clicked")
            onRunClicked()
        }

        binding.btnCycle.setOnClickListener{
            Log.e("btnCycle", "cycle clicked")
            onCyclingClicked()
        }

//        binding.btnCycle.setOnClickListener(this)

//        binding.btnCycle.setOnClickListener(object: View.OnClickListener {
//            override fun onClick(p0: View?) {
//                TODO("Not yet implemented")
//            }
//        })
    }

    private fun onRunClicked() {
        supportFragmentManager.commit {
            replace(R.id.fl_content, RunningFragment())
        }
    }

    private fun onCyclingClicked() {
        supportFragmentManager.commit {
            replace(R.id.fl_content, CyclingFragment())
        }
    }

//    override fun onClick(v: View?) {
//
//    }
}