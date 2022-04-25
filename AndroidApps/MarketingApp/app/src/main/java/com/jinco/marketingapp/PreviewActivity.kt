package com.jinco.marketingapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_preview.*

class PreviewActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_preview)

        val etContactName = intent.getStringExtra("etContactName")
        val etContactNumber = intent.getStringExtra("etContactNumber")
        val etDisplayName = intent.getStringExtra("etDisplayName")
        val etStartDate = intent.getStringExtra("etStartDate")
        val cbJuinor = intent.getBooleanExtra("cbJuinor", false)
        val cbImmediatedStart = intent.getBooleanExtra("cbImmediatedStart", false)
        val spJobTitle = intent.getStringExtra("spJobTitle")

        tv_message.text = "$etContactName\n" +
                "$etContactNumber\n" +
                "$etDisplayName\n" +
                "$etStartDate\n" +
                "$cbJuinor\n" +
                "$cbImmediatedStart\n" +
                "$spJobTitle\n"
    }
}