package com.jinco.recordkeeper

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.Menu
import android.view.MenuItem
import android.view.View
import androidx.fragment.app.commit
import com.google.android.material.bottomnavigation.BottomNavigationView
import com.google.android.material.navigation.NavigationBarView
import com.jinco.recordkeeper.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity(),
    NavigationBarView.OnItemSelectedListener {
    private  lateinit var binding: ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

//        supportFragmentManager.commit {
//            add(R.id.fl_content, RunningFragment())
//        }

//        binding.btnRun.setOnClickListener{
//            Log.e("btnRun", "run clicked")
//            onRunClicked()
//        }
//
//        binding.btnCycle.setOnClickListener{
//            Log.e("btnCycle", "cycle clicked")
//            onCyclingClicked()
//        }

//        binding.btnCycle.setOnClickListener(this)

//        binding.btnCycle.setOnClickListener(object: View.OnClickListener {
//            override fun onClick(p0: View?) {
//                TODO("Not yet implemented")
//            }
//        })

//        binding.bottomNanMenu.setOnNavigationItemSelectedListener (this)
        binding.bottomNanMenu.setOnItemSelectedListener (this)
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

    override fun onNavigationItemSelected(item: MenuItem): Boolean {
//        if(item.itemId == R.id.nav_cycle) {
//            onCyclingClicked()
//            return true
//        } else if (item.itemId == R.id.nav_run) {
//            onRunClicked()
//            return true
//        } else {
//            return false
//        }

//        return when {
//            item.itemId == R.id.nav_cycle -> {
//                onCyclingClicked()
//                true
//            }
//            item.itemId == R.id.nav_run -> {
//                onRunClicked()
//                true
//            }
//            else -> {
//                false
//            }
//        }

        return when (item.itemId) {
            R.id.nav_cycle -> {
                onCyclingClicked()
                true
            }
            R.id.nav_run -> {
                onRunClicked()
                true
            }
            else -> {
                false
            }
        }
    }

//    override fun onClick(v: View?) {
//
//    }

    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        menuInflater.inflate(R.menu.toolbar, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem) = when(item.itemId) {
        R.id.reset_run -> {
            true
        }

        R.id.reset_cycle -> {
            true
        }

        R.id.reset_all -> {
            true
        }

        else -> {
            super.onOptionsItemSelected(item)
        }
    }
}