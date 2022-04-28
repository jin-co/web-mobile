package com.jinco.formpractice

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.*

class MainActivity : AppCompatActivity() {
    var name:EditText? = null
    var contact:EditText? = null
    var email:EditText? = null
    var immediateStart:CheckBox? = null
    var jobTitle:Spinner? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        name = findViewById(R.id.et_contact_name)
        contact = findViewById(R.id.et_contact_number)
        email = findViewById(R.id.et_contact_email)
        immediateStart = findViewById(R.id.cb_immediate_start)
        jobTitle = findViewById(R.id.sp_job_title)
        var btnSubmit:Button = findViewById(R.id.btn_submit)

        btnSubmit.setOnClickListener {
            Toast.makeText(this, "hi", Toast.LENGTH_LONG).show()
            Log.e("test", "hi")
        }

    }
}