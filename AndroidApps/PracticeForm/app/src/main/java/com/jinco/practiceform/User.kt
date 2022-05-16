package com.jinco.practiceform

import java.io.Serializable

data class User(
    val firstName: String,
    val lastName: String,
    val title: String,
    val password: String,
    val email: String,
    val phone: String
):Serializable

