package com.jinco.marketingapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.inputmethod.InputBinding
import android.widget.*
import com.google.android.material.textfield.TextInputEditText
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
//    private var etContactName:TextInputEditText? = null
//    private var etContactNumber:TextInputEditText? = null
//    private var etDisplayName:TextInputEditText? = null
//    private var etStartDate:TextInputEditText? = null
//    private var cbJunior:CheckBox? = null
//    private var cbImmediateStart:CheckBox? = null
//    private var spJobTitle:Spinner? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
//        val btnPreview: Button = findViewById(R.id.btn_preview)
//        etContactName = findViewById(R.id.et_contact_name)
//        etContactNumber = findViewById(R.id.et_contact_number)
//        etDisplayName = findViewById(R.id.et_display_name)
//        etStartDate = findViewById(R.id.et_start_date)
//        cbJunior = findViewById(R.id.cb_junior)
//        cbImmediateStart = findViewById(R.id.cb_immediate_start)
//        spJobTitle = findViewById(R.id.spn_job_title)
//
//        btnPreview.setOnClickListener {
//            Toast.makeText(this, "button", Toast.LENGTH_LONG).show()
//        }


        btn_preview.setOnClickListener {
            onPreviewClicked()
        }

//        aading values to spinner
        val spinnerValues: Array<String> = arrayOf("Developer", "Engineer")

        val spinnerAdapter = ArrayAdapter(
            this,
            android.R.layout.simple_spinner_dropdown_item, spinnerValues)

        spn_job_title.adapter = spinnerAdapter
    }

    private fun onPreviewClicked() {
//        val etContactName = et_contact_name.text.toString()
//        val etContactNumber = et_contact_number.text.toString()
//        val etDisplayName = et_display_name.text.toString()
//        val etStartDate = et_start_date.text.toString()
//        val cbJunior = cb_junior.isChecked
//        val cbImmediateStart = cb_immediate_start.isChecked
//        val spJobTitle = spn_job_title.selectedItem?.toString()

        val message = Message(
            et_contact_name.text.toString(),
            et_contact_number.text.toString(),
            et_display_name.text.toString(),
            cb_junior.isChecked,
            spn_job_title.selectedItem?.toString(),
            cb_immediate_start.isChecked,
            et_start_date.text.toString()
        )

        val previewActivity = Intent(this, PreviewActivity::class.java)
//        previewActivity.putExtra("etContactName", etContactName)
//        previewActivity.putExtra("etContactNumber", etContactNumber)
//        previewActivity.putExtra("etDisplayName", etDisplayName)
//        previewActivity.putExtra("etStartDate", etStartDate)
//        previewActivity.putExtra("cbJunior", cbJunior)
//        previewActivity.putExtra("cbImmediateStart", cbImmediateStart)
//        previewActivity.putExtra("spJobTitle", spJobTitle)
        previewActivity.putExtra("Message", message)
        startActivity(previewActivity)
    }
}