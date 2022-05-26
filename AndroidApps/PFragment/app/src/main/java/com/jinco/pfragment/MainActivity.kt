package com.jinco.pfragment

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.MenuItem
import androidx.fragment.app.commit
import com.google.android.material.bottomnavigation.BottomNavigationView
import com.jinco.pfragment.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity(), BottomNavigationView.OnNavigationItemReselectedListener {
    lateinit var binding:ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        supportFragmentManager.commit {
            add(R.id.frame, RunFragment())
        }

        binding.bottomNav.setOnNavigationItemReselectedListener (this)
    }

    override fun onNavigationItemReselected(item: MenuItem) {
        if(item.itemId == R.id.run) {
            supportFragmentManager.commit {
                replace(R.id.frame, RunFragment())
            }
        } else {
            supportFragmentManager.commit {
                replace(R.id.frame, CycleFragment())
            }
        }
    }
}