package com.jinco.formtestsol

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        setupSpinner()
        setupButton()
    }

    private fun setupButton() {
        btn_Create.setOnClickListener{
            createAccount()
        }
    }

    private fun setupSpinner() {
        val titles = arrayOf("Miss", "Mrs", "Mr", "Ms")
        val titleAdapter = ArrayAdapter(this, android.R.layout.simple_spinner_dropdown_item, titles)
        spn_title.adapter = titleAdapter
    }

    private fun createAccount() {
        val user = User(
            spn_title.selectedItem as String,
            ti_first_name.text.toString(),
            ti_last_name.text.toString(),
            ti_email.text.toString(),
            ti_phone.text.toString(),
            ti_password.text.toString()
        )

        val intent = Intent(this, SummaryActivity::class.java)
        intent.putExtra("user", user)
        startActivity((intent))
    }
}