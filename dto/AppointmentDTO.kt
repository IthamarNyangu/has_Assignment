package com.ihm.has.dto

data class AppointmentDTO(
    var id:Int = 0,
    var appointmentTime: String = "",
    var approval: Boolean = false,
    var details: String = "",
    var doctorId: Long = 0,
    var patientId: Long = 0
)