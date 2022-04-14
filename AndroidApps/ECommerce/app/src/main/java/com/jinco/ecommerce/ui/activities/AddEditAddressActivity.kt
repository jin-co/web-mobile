package com.jinco.ecommerce.ui.activities

import android.os.Bundle
import android.text.TextUtils
import android.view.View
import android.widget.Toast
import com.jinco.ecommerce.R
import com.jinco.ecommerce.firestore.FirestoreClass
import com.jinco.ecommerce.models.Address
import com.jinco.ecommerce.widgets.Constants
import kotlinx.android.synthetic.main.activity_add_edit_address.*

class AddEditAddressActivity : BaseActivity() {

    private var addressDetails: Address? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_add_edit_address)

        if (intent.hasExtra(Constants.EXTRA_ADDRESS_DETAILS)) {
            addressDetails =
                intent.getParcelableExtra(Constants.EXTRA_ADDRESS_DETAILS)!!
        }

        setupActionBar()

        if (addressDetails != null) {
            if (addressDetails!!.id.isNotEmpty()) {

                tv_title.text = resources.getString(R.string.title_edit_address)
                btn_submit_address.text = resources.getString(R.string.btn_lbl_update)

                et_full_name.setText(addressDetails?.name)
                et_phone_number.setText(addressDetails?.mobileNumber)
                et_address.setText(addressDetails?.address)
                et_zip_code.setText(addressDetails?.zipCode)
                et_additional_note.setText(addressDetails?.additionalNote)

                when (addressDetails?.type) {
                    Constants.HOME -> {
                        rb_home.isChecked = true
                    }
                    Constants.OFFICE -> {
                        rb_office.isChecked = true
                    }
                    else -> {
                        rb_other.isChecked = true
                        til_other_details.visibility = View.VISIBLE
                        et_other_details.setText(addressDetails?.otherDetails)
                    }
                }
            }
        }

        rg_type.setOnCheckedChangeListener { _, checkedId ->
            if (checkedId == R.id.rb_other) {
                til_other_details.visibility = View.VISIBLE
            } else {
                til_other_details.visibility = View.GONE
            }
        }

        btn_submit_address.setOnClickListener {
            saveAddressToFirestore()
        }
    }

    private fun setupActionBar() {
        setSupportActionBar(toolbar_add_edit_address_activity)
        val actionBar = supportActionBar
        if (actionBar != null) {
            actionBar.setDisplayHomeAsUpEnabled(true)
            actionBar.setHomeAsUpIndicator(R.drawable.ic_white_color_back_24dp)
        }

        toolbar_add_edit_address_activity.setNavigationOnClickListener { onBackPressed() }
    }

    private fun validateData(): Boolean {
        return when {
            TextUtils.isEmpty(et_full_name.text.toString().trim { it <= ' ' }) -> {
                showErrorSnackBar(
                    resources.getString(R.string.err_msg_please_enter_full_name),
                    true
                )
                false
            }

            TextUtils.isEmpty(et_phone_number.text.toString().trim { it <= ' ' }) -> {
                showErrorSnackBar(
                    resources.getString(R.string.err_msg_please_enter_phone_number),
                    true
                )
                false
            }

            TextUtils.isEmpty(et_address.text.toString().trim { it <= ' ' }) -> {
                showErrorSnackBar(resources.getString(R.string.err_msg_please_enter_address), true)
                false
            }

            TextUtils.isEmpty(et_zip_code.text.toString().trim { it <= ' ' }) -> {
                showErrorSnackBar(resources.getString(R.string.err_msg_please_enter_zip_code), true)
                false
            }

            rb_other.isChecked && TextUtils.isEmpty(
                et_zip_code.text.toString().trim { it <= ' ' }) -> {
                showErrorSnackBar(resources.getString(R.string.err_msg_please_enter_zip_code), true)
                false
            }
            else -> {
                true
            }
        }
    }

    private fun saveAddressToFirestore() {
        val fullName: String = et_full_name.text.toString().trim { it <= ' ' }
        val phoneNumber: String = et_phone_number.text.toString().trim { it <= ' ' }
        val address: String = et_address.text.toString().trim { it <= ' ' }
        val zipCode: String = et_zip_code.text.toString().trim { it <= ' ' }
        val additionalNote: String = et_additional_note.text.toString().trim { it <= ' ' }
        val otherDetails: String = et_other_details.text.toString().trim { it <= ' ' }

        if (validateData()) {
            showProgressDialog(resources.getString(R.string.please_wait))

            val addressType: String = when {
                rb_home.isChecked -> {
                    Constants.HOME
                }
                rb_office.isChecked -> {
                    Constants.OFFICE
                }
                else -> {
                    Constants.OTHER
                }
            }

            val addressModel = Address(
                FirestoreClass().getCurrentUserID(),
                fullName,
                phoneNumber,
                address,
                zipCode,
                additionalNote,
                addressType,
                otherDetails
            )

            if (addressDetails != null && addressDetails!!.id.isNotEmpty()) {
                FirestoreClass().updateAddress(
                    this@AddEditAddressActivity,
                    addressModel,
                    addressDetails!!.id
                )
            } else {
                FirestoreClass().addAddress(this@AddEditAddressActivity, addressModel)
            }
        }
    }

    fun addUpdateAddressSuccess() {
        hideProgressDialog()
        val notifySuccessMessage: String = if (addressDetails != null && addressDetails!!.id.isNotEmpty()) {
            resources.getString(R.string.msg_your_address_updated_successfully)
        } else {
            resources.getString(R.string.err_your_address_added_successfully)
        }

        Toast.makeText(
            this@AddEditAddressActivity,
            notifySuccessMessage,
            Toast.LENGTH_SHORT
        ).show()

        setResult(RESULT_OK)
        finish()
    }
}