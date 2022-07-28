package com.jinco.jin_co_unit_converter

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.AdapterView
import android.widget.ArrayAdapter
import androidx.core.splashscreen.SplashScreen.Companion.installSplashScreen
import com.jinco.jin_co_unit_converter.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity(), AdapterView.OnItemSelectedListener {
    lateinit var binding: ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        // Handle the splash screen transition.
        val splashScreen = installSplashScreen()
        binding = ActivityMainBinding.inflate(layoutInflater)
        super.onCreate(savedInstanceState)
        setContentView(binding.root)

        setUpUnitTypeSpinner()
        setUpConvertSpinner()

        binding.btnCurrency.setOnClickListener {
            binding.spUnitType.isEnabled = false
        }

        binding.btnUnit.setOnClickListener {
            binding.spUnitType.isEnabled = true
        }

        binding.spUnitType.onItemSelectedListener = this
    }

    private fun setUpConvertSpinner() {
        val unitAdapter = ArrayAdapter.createFromResource(
            this,
            R.array.unit_length,
            android.R.layout.simple_spinner_dropdown_item
        )
        binding.spValueFrom.adapter = unitAdapter
        binding.spValueTo.adapter = unitAdapter
    }

    private fun setUpUnitTypeSpinner() {
        val unitTypeAdapter = ArrayAdapter.createFromResource(
            this,
            R.array.unit_type,
            android.R.layout.simple_spinner_dropdown_item
        )
        binding.spUnitType.adapter = unitTypeAdapter
    }

    override fun onItemSelected(p0: AdapterView<*>?, p1: View?, p2: Int, p3: Long) {
        when (p2) {
            0 -> Log.e("test1", R.array.unit_length.toString())
            1 -> Log.e("test2", p2.toString())
            2 -> Log.e("test3", p2.toString())
            3 -> Log.e("test4", p2.toString())
            4 -> Log.e("test5", p2.toString())
            5 -> Log.e("test6", p2.toString())
        }
    }

    override fun onNothingSelected(parent: AdapterView<*>) {
        // Another interface callback
    }
}
