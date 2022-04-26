package com.jinco.marketingapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_preview.*

class PreviewActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_preview)

//        val etContactName = intent.getStringExtra("etContactName")
//        val etContactNumber = intent.getStringExtra("etContactNumber")
//        val etDisplayName = intent.getStringExtra("etDisplayName")
//        val etStartDate = intent.getStringExtra("etStartDate")
//        val cbJunior = intent.getBooleanExtra("cbJunior", false)
//        val cbImmediateStart = intent.getBooleanExtra("cbImmediateStart", false)
//        val spJobTitle = intent.getStringExtra("spJobTitle")
//
//        tv_message.text = "$etContactName\n" +
//                "$etContactNumber\n" +
//                "$etDisplayName\n" +
//                "$etStartDate\n" +
//                "$cbJunior\n" +
//                "$cbImmediateStart\n" +
//                "$spJobTitle\n"

        // as -> casting
        val message: Message = intent.getSerializableExtra("Message") as Message
        val messagePreviewText = """
            Hi ${message.contactName},
            
            My name is ${message.displayName} and I am ${message.getFullJobDescription()}
            I have a portfolio of apps to demonstrate my technical skills.
            I am able to start a new position ${message.getAvailability()}.
            Please get in touch if you have any suitable roles for me.
            Thanks and best regards.            
        """.trimIndent()
        tv_message.text = messagePreviewText
    }
}