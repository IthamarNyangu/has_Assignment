package com.ihm.has.dto

data class UserCreationDto(

    var firstName: String = "",
    var lname: String = "",
    var email: String = "",
    var password: String = "",
    var phone: String = "",
    var roleId: Int = 0,
    var id: Long = 0
)
