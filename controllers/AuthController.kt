package com.ihm.has.controllers

import com.ihm.has.dto.LoginDTO
import com.ihm.has.dto.UserCreationDto
import com.ihm.has.services.JwtService
import com.ihm.has.services.UserService
import jakarta.servlet.http.Cookie
import jakarta.servlet.http.HttpServletResponse
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.lang.Exception
import javax.management.MBeanRegistration

@RestController
@RequestMapping("api/auth")
class AuthController(
    @Autowired
    private val userService: UserService,
    @Autowired
    private val jwtService: JwtService
)
{

    @PostMapping("create-admin")
    fun createAdmin(
        @RequestBody
        adminRegistrationDetails: UserCreationDto
    ):ResponseEntity<UserCreationDto>{
        adminRegistrationDetails.roleId = 0

        return ResponseEntity.ok(userService.saveUser(adminRegistrationDetails))
    }

    @PostMapping("login")
    fun login(
        @RequestBody
        userLoginDetails: LoginDTO,
        response: HttpServletResponse
    ): ResponseEntity<Any> {
        try {
            val userExists = userService.determineIfUserIsValid(userLoginDetails.email, userLoginDetails.password)

            if (!userExists) {
                return ResponseEntity.badRequest().body("Invalid credentials")
            }

            val user = userService.findUserByEmail(userLoginDetails.email)

            val token = jwtService.generateJWTTokenForUser(user.id)

            val cookie = Cookie("jwt", token)
            cookie.isHttpOnly = true

            response.addCookie(cookie)

            return ResponseEntity.ok(cookie)
        } catch (e: Exception) {
            return ResponseEntity.badRequest().body(e.message)
        }
    }

    @PostMapping("register")
    fun register(
        @RequestBody
        userRegistrationDetails: UserCreationDto
    ): ResponseEntity<UserCreationDto>{
        userRegistrationDetails.roleId = 2

        return ResponseEntity.ok(userService.saveUser(userRegistrationDetails))
    }

    
    @PostMapping("logout")
    fun logout(response: HttpServletResponse):ResponseEntity<Any>{
    val cookie = Cookie("jwt","")
        cookie.isHttpOnly = true

        response.addCookie(cookie)

        return ResponseEntity.ok("Logout Successfully")
    }

}