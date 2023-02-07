package com.ihm.has.entities

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import jakarta.persistence.Entity
import jakarta.persistence.Column
import jakarta.persistence.ManyToOne
import jakarta.persistence.Table
import jakarta.persistence.JoinColumn
import jakarta.persistence.Id


@Entity
@Table(name = "user", schema = "public")
class User {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    var id: Long = 0


    @Column(name = "firstName")
    var firstName: String = ""

    @Column(name = "lname")
    var lname: String = ""

    @Column(name = "email")
    var email: String = ""

    @Column(name = "phone")
    var phone: String = ""

    @ManyToOne
    @JoinColumn(name = "role_id")
    var role: Role = Role()

    @Column(name = "password", nullable = false)
    var password: String = ""
    @JsonIgnore
    get
        set(value){
            val passwordEncoder = BCryptPasswordEncoder()
            field = passwordEncoder.encode(value)
        }
    
    fun comparePassword(password: String): Boolean{
        val passwordEncoder = BCryptPasswordEncoder()
        return passwordEncoder.matches(password, this.password)
    }

}