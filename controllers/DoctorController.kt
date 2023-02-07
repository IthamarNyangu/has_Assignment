package com.ihm.has.controllers

import com.ihm.has.dto.AcceptAppointmentDTO
import com.ihm.has.dto.AppointmentDTO
import com.ihm.has.dto.GetAppointmentsDTO
import com.ihm.has.dto.UserCreationDto
import com.ihm.has.services.AppointmentService
import com.ihm.has.services.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/doctor")
class DoctorController(
    @Autowired
    private val appointmentService: AppointmentService,
    @Autowired
    private val userService: UserService
) {

    @PostMapping("/register")
    fun createDoctor(
        @RequestBody
        doctorRegistrationDetails: UserCreationDto
    ): ResponseEntity<UserCreationDto>{
        doctorRegistrationDetails.roleId = 2
        return ResponseEntity.ok(userService.saveUser(doctorRegistrationDetails))
    }

    @PostMapping("accept-appointment")
    fun acceptAppointment(
        @RequestBody
        appointmentDetails: AcceptAppointmentDTO
    ): ResponseEntity<Unit> {
        appointmentDetails.approval = true

        return ResponseEntity.ok(appointmentService.acceptAppointment(appointmentDetails))
    }

    @PatchMapping("change-appointment")
    fun changeAppointment(
        @RequestBody
        appointmentDetails: AppointmentDTO
    ): ResponseEntity<AppointmentDTO> {
        return ResponseEntity.ok(appointmentService.updateAppointment(appointmentDetails))
    }

    @GetMapping("get-appointments")
    fun getActiveAppointments(
        @RequestBody
        appointments: GetAppointmentsDTO
    ): ResponseEntity<MutableList<AppointmentDTO>> {
        return ResponseEntity.ok(appointmentService.findAppointmentByDoctorId(appointments.doctorId))
    }
}