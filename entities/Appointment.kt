package com.ihm.has.entities

import jakarta.persistence.*

@Entity
@Table(name = "appointment", schema = "public")
class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    var id:Int = 0

    @Column(name = "date")
    var appointmentTime: String = ""

    @Column(name = "approval", columnDefinition = "boolean default false")
    var approval: Boolean = false

    @Column(name = "details")
    var details: String = ""

    @ManyToOne
    @JoinColumn(name = "doctor_id")
    var doctor: User = User()

    @ManyToOne
    @JoinColumn(name = "patient_id")
    var patient: User = User()
}