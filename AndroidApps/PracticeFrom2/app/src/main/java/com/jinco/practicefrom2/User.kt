package com.jinco.practicefrom2

import java.io.Serializable

data class User (
    val name:String,
    val phone:String,
    val what:String,
    val good:Boolean
):Serializable
