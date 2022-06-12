package com.jinco.pfragmenttest4

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.MenuItem
import androidx.fragment.app.commit
import com.google.android.material.navigation.NavigationBarView
import com.jinco.pfragmenttest4.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    lateinit var binding: ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        supportFragmentManager.commit {
            add(R.id.fragment, RunFragment(R.layout.fragment_run))
        }


    }

//    override fun onNavigationItemSelected(item: MenuItem): Boolean {
//        if (item.itemId == R.id.fragment) {
//            supportFragmentManager.commit {
//                replace(R.id.fragment, RunFragment(R.layout.fragment_run))
//            }
//        } else {
//            supportFragmentManager.commit {
//                replace(R.id.fragment, CycleFragment(R.layout.fragment_cycle))
//            }
//        }
//    }
}