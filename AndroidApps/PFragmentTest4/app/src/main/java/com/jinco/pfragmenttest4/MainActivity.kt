package com.jinco.pfragmenttest4

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.MenuItem
import androidx.fragment.app.commit
import com.google.android.material.navigation.NavigationBarView
import com.jinco.pfragmenttest4.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity(), NavigationBarView.OnItemSelectedListener {
    lateinit var binding: ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        supportFragmentManager.commit {
            add(R.id.run, RunFragment())
        }

        binding.bottomNav.setOnItemSelectedListener (this)
    }

    override fun onNavigationItemSelected(item: MenuItem): Boolean {
        if (item.itemId == R.id.run) {
            supportFragmentManager.commit {
                replace(R.id.run, RunFragment())
            }
        } else {
            supportFragmentManager.commit {
                replace(R.id.cycle, CycleFragment())
            }
        }
    }
}