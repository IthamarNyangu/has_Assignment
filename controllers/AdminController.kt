package com.ihm.has.controllers

import com.ihm.has.dto.DeleteDTO
import com.ihm.has.dto.UserCreationDto
import com.ihm.has.services.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PatchMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("api/admin")
class AdminController(
    @Autowired
    private val userService: UserService
) {
    @PostMapping("add-doctor")
    fun addDoctor(
        @RequestBody
        doctorRegistrationDetails: UserCreationDto
    ): ResponseEntity<UserCreationDto>{
        doctorRegistrationDetails.roleId = 2

        return ResponseEntity.ok(userService.saveUser(doctorRegistrationDetails))
    }

    @DeleteMapping("delete-doctor")
    fun removeDoctor(
        @RequestBody
        doctorDetails: DeleteDTO
    ): ResponseEntity<Unit> {
        return ResponseEntity.ok(userService.deleteUser(doctorDetails.id))
    }

    @PatchMapping("update-doctor")
    fun updateDoctor(
        @RequestBody
        doctorDetails: UserCreationDto
    ): ResponseEntity<UserCreationDto> {
        return ResponseEntity.ok(userService.updateUser(doctorDetails))
    }

    @GetMapping("get-doctors")
    fun getAllDoctors(): ResponseEntity<MutableList<UserCreationDto>> {
        return ResponseEntity.ok(userService.findAllUsersByRole(2))
    }

    @GetMapping("get-doctor")
    fun getDoctor(
        @RequestBody
        doctorDetails: UserCreationDto
    ): ResponseEntity<UserCreationDto> {
        return ResponseEntity.ok(userService.findUserById(doctorDetails.id))
    }
}