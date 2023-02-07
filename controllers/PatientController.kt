package com.ihm.has.controllers

import com.ihm.has.dto.AddAppointmentDTO
import com.ihm.has.dto.AppointmentDTO
import com.ihm.has.dto.GetAppointmentsDTO
import com.ihm.has.dto.UserCreationDto
import com.ihm.has.services.AppointmentService
import com.ihm.has.services.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("api/patient")
class PatientController(
    @Autowired
    private val userService: UserService,
    @Autowired
    private val appointmentService: AppointmentService

) {
    @PostMapping("register")
    fun register(
        @RequestBody
        patientRegistrationDetails: UserCreationDto
    ): ResponseEntity<UserCreationDto>{
        patientRegistrationDetails.roleId = 1

        return ResponseEntity.ok(userService.saveUser(patientRegistrationDetails))
    }

    @PostMapping("add-appointment")
    fun addAppointment(
        @RequestBody
        appointmentDetails: AddAppointmentDTO
    ): ResponseEntity<AppointmentDTO> {
        return ResponseEntity.ok(appointmentService.saveAppointment(appointmentDetails))
    }

    @GetMapping("get-appointments")
    fun getAppointments(
        @RequestBody
        patientId: GetAppointmentsDTO
    ): ResponseEntity<MutableList<AppointmentDTO>> {
        return ResponseEntity.ok(appointmentService.findAppointmentsByPatientId(patientId.patientId))
    }
}