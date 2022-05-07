package com.jinco.recordkeeper

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.jinco.recordkeeper.databinding.ActivityRunRecordBinding

class RunRecordActivity : AppCompatActivity() {
    private lateinit var binding: ActivityRunRecordBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityRunRecordBinding.inflate(layoutInflater)
//        setContentView(R.layout.activity_run_record)
        setContentView(binding.root)
        val distance = intent.getStringExtra("Distance")
        title = "$distance Rennung Record"
    }
}