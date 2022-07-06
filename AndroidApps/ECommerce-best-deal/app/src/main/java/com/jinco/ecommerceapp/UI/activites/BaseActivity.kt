package com.jinco.ecommerceapp.UI.activites

import android.app.Dialog
import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat
import androidx.core.splashscreen.SplashScreen.Companion.installSplashScreen
import com.google.android.material.snackbar.Snackbar
import com.jinco.ecommerceapp.R
import com.jinco.ecommerceapp.databinding.ActivityMainBinding

open class BaseActivity : AppCompatActivity() {
    lateinit var progressDialog: Dialog
    lateinit var binding: ActivityBase
    override fun onCreate(savedInstanceState: Bundle?) {
        binding = ActivityBase.inflate(layoutInflater)
        super.onCreate(savedInstanceState)
        setContentView(binding.root)
    }

    fun showErrorSnackBar(message: String, errorMessage: Boolean) {
        val snackBar =
            Snackbar.make(findViewById(android.R.id.content), message, Snackbar.LENGTH_LONG)
        val snackBarView = snackBar.view

        if (errorMessage) {
            snackBarView.setBackgroundColor(
                ContextCompat.getColor(
                    this@BaseActivity,
                    R.color.colorSnackBarError
                )
            )
        } else {
            snackBarView.setBackgroundColor(
                ContextCompat.getColor(
                    this@BaseActivity,
                    R.color.colorSnackBarSuccess
                )
            )
        }
        snackBar.show()
    }

    fun setupActionBar() {
//        setSupportActionBar()
//        val actionBar = supportActionBar
//        if (actionBar != null) {
//            actionBar.setDisplayHomeAsUpEnabled(true)
//            actionBar.setHomeAsUpIndicator(R.drawable.ic_launcher_background)
//        }

    }

    fun showSpinner(text: String) {
        progressDialog = Dialog(this)
        progressDialog.setContentView(R.layout.dialog_spinner)

    }
}