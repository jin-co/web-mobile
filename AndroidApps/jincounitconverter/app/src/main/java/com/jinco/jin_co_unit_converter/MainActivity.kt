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

        binding.btnCurrency.setOnClickListener {
            binding.spUnitType.isEnabled = false
        }

        binding.btnUnit.setOnClickListener {
            binding.spUnitType.isEnabled = true
        }

        binding.spUnitType.onItemSelectedListener = this
    }

    private fun setUpConvertSpinner(spinnerId:Int) {
        val unitAdapter = ArrayAdapter.createFromResource(
            this,
            spinnerId,
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
            0 -> setUpConvertSpinner(R.array.unit_length)
            1 -> setUpConvertSpinner(R.array.unit_temperature)
            2 -> setUpConvertSpinner(R.array.unit_area)
            3 -> setUpConvertSpinner(R.array.unit_volume)
            4 -> setUpConvertSpinner(R.array.unit_weight)
            5 -> setUpConvertSpinner(R.array.unit_time)
        }
    }

    override fun onNothingSelected(parent: AdapterView<*>) {
        // Another interface callback
    }
}
