package com.ihm.has.dto

data class AddAppointmentDTO(
    var id: Int = 0,
    var appointmentTime: String = "",
    var approval: Boolean = false,
    var details: String = "",
    var doctorId: Long = 0,
    var patientId: Long = 0
)