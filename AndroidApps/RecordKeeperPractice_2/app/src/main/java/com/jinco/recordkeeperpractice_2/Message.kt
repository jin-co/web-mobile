package com.jinco.recordkeeperpractice_2

import java.io.Serializable

data class Message (
    val contactName:String,
    val contactNumber:String,
    val displayName:String,
    val job:String,
    val immediate:Boolean,
):Serializable