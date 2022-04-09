package com.jinco.ecommerce.ui.activities

import android.content.Context
import android.os.Bundle
import com.jinco.ecommerce.R
import com.jinco.ecommerce.ui.activities.BaseActivity
import com.jinco.ecommerce.widgets.Constants
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : BaseActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val sharedPreferences =
            getSharedPreferences(Constants.MYSHOPPAL_PREFERENCES, Context.MODE_PRIVATE)

        val username = sharedPreferences.getString(Constants.LOGGED_IN_USERNAME, "")!!
        tv_main.text= "The logged in user is $username."
    }
}