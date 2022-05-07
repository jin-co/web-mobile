package com.jinco.recordkeeper

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.jinco.recordkeeper.databinding.ActivityCycleRecordBinding

class CycleRecordActivity : AppCompatActivity() {
    private lateinit var binding: ActivityCycleRecordBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityCycleRecordBinding.inflate(layoutInflater)
        setContentView(binding.root)
        val distance = intent.getStringExtra("Distance")
        title = "$distance record"
    }
}