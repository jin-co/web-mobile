package com.jinco.pfragementtest

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.MenuItem
import androidx.fragment.app.commit
import com.google.android.material.navigation.NavigationBarView
import com.jinco.pfragementtest.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity(), NavigationBarView.OnItemSelectedListener {
    lateinit var binding:ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        supportFragmentManager.commit {
            add(R.id.frame, RunFragment())
        }

        binding.bottomNav.setOnItemSelectedListener (this)
    }

    override fun onNavigationItemSelected(item: MenuItem): Boolean {
        if(item.itemId == R.id.run) {
            supportFragmentManager.commit {
                replace(R.id.frame, RunFragment())
            }
            return true
        }

        if (item.itemId == R.id.cycle) {
            supportFragmentManager.commit {
                replace(R.id.frame, CycleFragment())
            }
            return true
        }
        return false
    }
}