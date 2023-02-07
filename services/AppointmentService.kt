package com.ihm.has.services

import com.ihm.has.dto.AcceptAppointmentDTO
import com.ihm.has.dto.AddAppointmentDTO
import com.ihm.has.dto.AppointmentDTO
import com.ihm.has.entities.Appointment
import com.ihm.has.repositories.AppointmentRepository
import com.ihm.has.repositories.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class AppointmentService(
    @Autowired
    private val appointmentRepository: AppointmentRepository,
    @Autowired
    private val userRepository: UserRepository
) {
    fun saveAppointment(appointment: AddAppointmentDTO): AppointmentDTO {
        val appointmentDTO = AppointmentDTO()

        appointmentDTO.id = appointment.id
        appointmentDTO.appointmentTime = appointment.appointmentTime
        appointmentDTO.approval = appointment.approval
        appointmentDTO.details = appointment.details
        appointmentDTO.doctorId = userRepository.findById(appointment.doctorId).get().id // + " " + userRepository.findById(appointment.doctorId).get().lastName
        appointmentDTO.patientId = userRepository.findById(appointment.patientId).get().id// + " " + userRepository.findById(appointment.patientId).get().lastName

        val appointmentEntity = convertToEntity(appointmentDTO)
        val savedAppointment = appointmentRepository.save(appointmentEntity)

        return convertToDTO(savedAppointment)
    }

    fun updateAppointment(appointment: AppointmentDTO): AppointmentDTO {
        val appointmentEntity = convertToEntity(appointment)
        val savedAppointment = appointmentRepository.save(appointmentEntity)

        return convertToDTO(savedAppointment)
    }


    fun acceptAppointment(appointment: AcceptAppointmentDTO) {
        val appointmentDTO = AppointmentDTO()

        appointmentDTO.id = appointment.id
        appointmentDTO.approval = appointment.approval
        appointmentDTO.details = appointmentRepository.findDetailsById(appointment.id)
        appointmentDTO.appointmentTime = appointmentRepository.findAppointmentTimeById(appointment.id)

        val doctorId = appointmentRepository.findDoctorByAppointmentId(appointment.id)
        val patientId = appointmentRepository.findPatientByAppointmentId(appointment.id)

        appointmentDTO.doctorId = userRepository.findById(doctorId).get().id
        appointmentDTO.patientId = userRepository.findById(patientId).get().id

        val appointmentEntity = convertToEntity(appointmentDTO)
        appointmentRepository.save(appointmentEntity)
    }

    fun findAppointmentByDoctorId(doctorId: Long): MutableList<AppointmentDTO> {
        val appointments = appointmentRepository.findAllByDoctorId(doctorId)
        val appointmentDTOs = mutableListOf<AppointmentDTO>()

        for (appointment in appointments) {
            appointmentDTOs.add(convertToDTO(appointment))
        }

        return appointmentDTOs
    }

    fun findAppointmentsByPatientId(patientId: Long): MutableList<AppointmentDTO> {
        val appointments = appointmentRepository.findAllByPatientId(patientId)
        val appointmentDTOs = mutableListOf<AppointmentDTO>()

        for (appointment in appointments) {
            appointmentDTOs.add(convertToDTO(appointment))
        }

        return appointmentDTOs
    }


    private fun convertToDTO(appointment: Appointment): AppointmentDTO {
        val appointmentDTO = AppointmentDTO()

        appointmentDTO.id = appointment.id
        appointmentDTO.appointmentTime = appointment.appointmentTime
        appointmentDTO.approval = appointment.approval
        appointmentDTO.details = appointment.details
        appointmentDTO.doctorId = appointment.doctor.id
        appointmentDTO.patientId = appointment.doctor.id

        return appointmentDTO
    }

    private fun convertToEntity(appointmentDTO: AppointmentDTO): Appointment {
        val appointment = Appointment()

        appointment.id = appointmentDTO.id
        appointment.appointmentTime = appointmentDTO.appointmentTime
        appointment.approval = appointmentDTO.approval
        appointment.details = appointmentDTO.details
        appointment.doctor = userRepository.findById(appointmentDTO.doctorId).orElse(null)
        appointment.patient = userRepository.findById(appointmentDTO.patientId).orElse(null)

        return appointment
    }
}