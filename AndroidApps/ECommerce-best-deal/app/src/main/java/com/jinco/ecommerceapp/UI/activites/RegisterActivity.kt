package com.jinco.ecommerceapp.UI.activites

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.text.TextUtils
import com.jinco.ecommerceapp.R
import com.jinco.ecommerceapp.databinding.ActivityRegisterBinding

class RegisterActivity : BaseActivity() {
    lateinit var binding: ActivityRegisterBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityRegisterBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.tvRegisterToLoginPage.setOnClickListener {
            val intent = Intent(this@RegisterActivity, LoginActivity::class.java)
            startActivity(intent)
        }

        binding.btnRegister.setOnClickListener {
            validate()
        }
    }

    private fun validate(): Boolean {
//        return when {
//            TextUtils.isEmpty(binding.etRegisterFirstName.text.toString().trim { it <= ' ' }) -> {
//                showErrorSnackBar("resources.getString()", true)
//                false
//            }
//
//            TextUtils.isEmpty(binding.etRegisterLastName.text.toString().trim { it <= ' ' }) -> {
//                showErrorSnackBar("resources.getString()", true)
//                false
//            }
//            else -> {
//                showErrorSnackBar("resources.getString()", false)
//                true
//            }
//        }
    }
}