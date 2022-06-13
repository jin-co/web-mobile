package com.jinco.pfragementtest3

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.MenuItem
import android.widget.Toast
import androidx.fragment.app.commit
import com.google.android.material.navigation.NavigationBarView
import com.jinco.pfragementtest3.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity(), NavigationBarView.OnItemSelectedListener {
    lateinit var binding: ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        supportFragmentManager.commit {
            add(R.id.fragment, RunFragment())
        }
        binding.bottomNav.setOnItemSelectedListener(this)
    }

    override fun onNavigationItemSelected(item: MenuItem): Boolean {
        if (item.itemId == R.id.run) {
            supportFragmentManager.commit {
                replace(R.id.fragment, RunFragment())
            }
            return true
        } else {
            supportFragmentManager.commit {
                replace(R.id.fragment, CycleFragment())
            }
            return true
        }
    }
}