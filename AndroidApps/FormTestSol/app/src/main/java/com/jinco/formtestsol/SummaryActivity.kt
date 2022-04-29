package com.jinco.formtestsol

import android.content.Intent
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_summary.*

class SummaryActivity : AppCompatActivity() {
    lateinit var user: User

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_summary)

        retireveUser()
        displayUser()
        setupClickListener()
    }

    private fun setupClickListener() {
        user = intent.getSerializableExtra("user") as User
    }

    private fun displayUser() {
        tv_name.text = user.getFullName()
        tv_email.text = user.email
        tv_phone.text = user.phone
    }

    private fun retireveUser() {
        tv_email.setOnClickListener{
            val intent = Intent(Intent.ACTION_SENDTO)
            intent.data = Uri.parse("mailto:${user.email}")
            startActivity(intent)
        }
        tv_phone.setOnClickListener{
            val intent = Intent(Intent.ACTION_DIAL)
            intent.data = Uri.parse("tel:${user.phone}")
            startActivity(intent)
        }
    }
}