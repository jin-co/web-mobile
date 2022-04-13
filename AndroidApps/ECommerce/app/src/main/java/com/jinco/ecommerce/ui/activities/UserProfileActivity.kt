package com.jinco.ecommerce.ui.activities

import android.Manifest
import android.app.Activity
import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Bundle
import android.text.TextUtils
import android.util.Log
import android.view.View
import android.widget.Toast
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.jinco.ecommerce.R
import com.jinco.ecommerce.firestore.FirestoreClass
import com.jinco.ecommerce.models.User
import com.jinco.ecommerce.widgets.Constants
import com.jinco.ecommerce.widgets.GlideLoader
import kotlinx.android.synthetic.main.activity_user_profile.*
import java.io.IOException

@Suppress("DEPRECATION")
class UserProfileActivity : BaseActivity(), View.OnClickListener {
    private lateinit var userDetails: User
    private var selectedImageFileUri: Uri? = null
    private var userProfileImageURL: String = ""

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_user_profile)

        if (intent.hasExtra(Constants.EXTRA_USER_DETAILS)) {
            userDetails = intent.getParcelableExtra(Constants.EXTRA_USER_DETAILS)!!
        }

        if (userDetails.profileCompleted == 0) {
            tv_title.text = resources.getString(R.string.title_complete_profile)

            et_first_name.isEnabled = false
            et_first_name.setText(userDetails.firstName)

            et_last_name.isEnabled = false
            et_last_name.setText(userDetails.lastName)

            et_email.isEnabled = false
            et_email.setText(userDetails.email)
        } else {
            setupActionBar()
            tv_title.text = resources.getString(R.string.title_edit_profile)
            GlideLoader(this@UserProfileActivity).loadUserPicture(userDetails.image, iv_user_photo)
            et_first_name.setText(userDetails.firstName)
            et_last_name.setText(userDetails.lastName)
            et_email.isEnabled = false
            et_email.setText(userDetails.email)

            if (userDetails.mobile != 0L) {
                et_mobile_number.setText(userDetails.mobile.toString())
            }
            if (userDetails.gender == Constants.MALE) {
                rb_male.isChecked = true
            } else {
                rb_female.isChecked = true
            }
        }

        iv_user_photo.setOnClickListener(this@UserProfileActivity)
        btn_save.setOnClickListener(this@UserProfileActivity)
        btn_skip.setOnClickListener {
            var intent = Intent(this@UserProfileActivity, DashboardActivity::class.java)
            startActivity((intent))
        }
    }

    override fun onClick(v: View?) {
        if (v != null) {
            when (v.id) {
                R.id.iv_user_photo -> {
                    if (ContextCompat.checkSelfPermission(
                            this,
                            Manifest.permission.READ_EXTERNAL_STORAGE
                        )
                        == PackageManager.PERMISSION_GRANTED
                    ) {
                        Constants.showImageChooser(this@UserProfileActivity)
                    } else {
                        ActivityCompat.requestPermissions(
                            this,
                            arrayOf(Manifest.permission.READ_EXTERNAL_STORAGE),
                            Constants.READ_STORAGE_PERMISSION_CODE
                        )
                    }
                }

                R.id.btn_save -> {
                    if (validateUserProfileDetails()) {
                        showProgressDialog(resources.getString(R.string.please_wait))
                        updateUserProfileDetails()
//                        delete test
//                        if (selectedImageFileUri != null) {
//                            FirestoreClass().uploadImageToCloudStorage(
//                                this@UserProfileActivity,
//                                selectedImageFileUri,
//                                Constants.USER_PROFILE_IMAGE
//                            )
//                        } else {
//                            updateUserProfileDetails()
//                        }
                    }
                }
            }
        }
    }

    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<out String>,
        grantResults: IntArray
    ) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        if (requestCode == Constants.READ_STORAGE_PERMISSION_CODE) {
            if (grantResults.isNotEmpty() && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                Log.e("okay: ", grantResults[0].toString())
                Constants.showImageChooser(this@UserProfileActivity)
            } else {
                Log.e("no!!: ", grantResults[0].toString())
                Toast.makeText(
                    this,
                    resources.getString(R.string.storage_permission_denied),
                    Toast.LENGTH_LONG
                ).show()
            }
        }
    }

    public override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        if (resultCode == Activity.RESULT_OK) {
            if (requestCode == Constants.PICK_IMAGE_REQUEST_CODE) {
                if (data != null) {
                    try {
                        selectedImageFileUri = data.data!!
                        GlideLoader(this@UserProfileActivity).loadUserPicture(
                            selectedImageFileUri!!,
                            iv_user_photo
                        )
//                        iv_user_photo.setImageURI(selectedImageFileUri)
                    } catch (e: IOException) {
                        e.printStackTrace()
                        Toast.makeText(
                            this@UserProfileActivity,
                            resources.getString(R.string.image_selection_failed),
                            Toast.LENGTH_SHORT
                        ).show()
                    }
                }
            }
        } else if (resultCode == Activity.RESULT_CANCELED) {
        }
    }

    private fun setupActionBar() {
        setSupportActionBar(toolbar_user_profile_activity)
        val actionBar = supportActionBar
        if (actionBar != null) {
            actionBar.setDisplayHomeAsUpEnabled(true)
            actionBar.setHomeAsUpIndicator(R.drawable.ic_white_color_back_24dp)
        }

        toolbar_user_profile_activity.setNavigationOnClickListener { onBackPressed() }
    }

    private fun validateUserProfileDetails(): Boolean {
        return when {
            TextUtils.isEmpty(et_mobile_number.text.toString().trim { it <= ' ' }) -> {
                showErrorSnackBar(resources.getString(R.string.err_msg_enter_mobile_number), true)
                false
            }
            else -> {
                true
            }
        }
    }

    private fun updateUserProfileDetails() {
        val userHashMap = HashMap<String, Any>()
        val firstName = et_first_name.text.toString().trim { it <= ' ' }
        if (firstName != userDetails.firstName) {
            userHashMap[Constants.FIRST_NAME] = firstName
        }
        val lastName = et_last_name.text.toString().trim { it <= ' ' }
        if (lastName != userDetails.lastName) {
            userHashMap[Constants.LAST_NAME] = lastName
        }

        val mobileNumber = et_mobile_number.text.toString().trim { it <= ' ' }
        val gender = if (rb_male.isChecked) {
            Constants.MALE
        } else {
            Constants.FEMALE
        }

        if (selectedImageFileUri.toString().isNotEmpty()) {
            userHashMap[Constants.IMAGE] = selectedImageFileUri.toString()
        }

        if (mobileNumber.isNotEmpty() && mobileNumber != userDetails.mobile.toString()) {
            userHashMap[Constants.MOBILE] = mobileNumber.toLong()
        }

        if (gender.isNotEmpty() && gender != userDetails.gender) {
            userHashMap[Constants.GENDER] = gender
        }

        if (userDetails.profileCompleted == 0) {
            userHashMap[Constants.COMPLETE_PROFILE] = 1
        }

        FirestoreClass().updateUserProfileData(
            this@UserProfileActivity,
            userHashMap
        )
    }

    fun userProfileUpdateSuccess() {
        hideProgressDialog()
        Toast.makeText(
            this@UserProfileActivity,
            resources.getString(R.string.msg_profile_update_success),
            Toast.LENGTH_SHORT
        ).show()

        startActivity(Intent(this@UserProfileActivity, DashboardActivity::class.java))
        finish()
    }

//    delete test
//    fun imageUploadSuccess(imageURL: String) {
//        userProfileImageURL = imageURL
//        updateUserProfileDetails()
//    }
}