package com.jinco.marketingapp

import java.io.Serializable

data class Message(
    val contactName: String,
    val contactNumber: String,
    val displayName: String,
    val includeJunior: Boolean,
    val jobTitle: String?,
    val immediateStart: Boolean,
    val startDate: String?
) : Serializable {

//    fun getFullJobDescription(): String {
//        if (includeJunior) {
//            return "a Joinor $jobTitle"
//        } else {
//            return "an $jobTitle"
//        }
//    }
//
//    fun getFullJobDescription(): String {
//        return if (includeJunior) {
//            "a Joinor $jobTitle"
//        } else {
//            "an $jobTitle"
//        }
//    }

    fun getFullJobDescription() =
        if (includeJunior) "a Joinor $jobTitle" else "an $jobTitle"

    fun getAvailability() =
        if (immediateStart) "immediately" else "from $startDate"
}