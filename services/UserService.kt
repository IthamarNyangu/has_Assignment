package com.ihm.has.services

import com.ihm.has.dto.UserCreationDto
import com.ihm.has.entities.User
import com.ihm.has.repositories.RoleRepository
import com.ihm.has.repositories.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class UserService(
    @Autowired
    private val userRepository: UserRepository,
    @Autowired
    private val roleRepository: RoleRepository
) {
    fun saveUser(user: UserCreationDto): UserCreationDto {
        val userEntity = convertToEntity(user)
        val savedUser = userRepository.save(userEntity)

        return convertToDto(savedUser)
    }

    private fun convertToDto(user: User): UserCreationDto {
        val userDto = UserCreationDto()


        userDto.firstName= user.firstName
        userDto.lname = user.lname
        userDto.email = user.email
        userDto.password = user.password
        userDto.phone = user.phone
        userDto.roleId = user.role.id

        return userDto
    }

    private fun convertToEntity(userDto: UserCreationDto): User {
        val user = User()


        user.firstName = userDto.firstName
        user.lname = userDto.lname
        user.email = userDto.email
        user.password = userDto.password
        user.phone = userDto.phone
        user.role = roleRepository.findById(userDto.roleId).get()

        return user
    }

    fun determineIfUserIsValid(email: String, password: String): Boolean {
        val user = userRepository.findByEmail(email) ?: return false

        if (!user.comparePassword(password)) {
            return false
        }
        return true
    }

    fun findUserByEmail(email: String): UserCreationDto {
        val user = userRepository.findByEmail(email)

        return convertToDto(user!!)
    }

    fun deleteUser(id: Long) {
        userRepository.deleteById(id)
    }

    fun updateUser(user: UserCreationDto): UserCreationDto {
        val userEntity = convertToEntity(user)
        val savedUser = userRepository.save(userEntity)

        return convertToDto(savedUser)
    }

    fun findAllUsersByRole(roleId: Long): MutableList<UserCreationDto> {
        val users = userRepository.findAllByRole(roleId)
        val userDTOs = mutableListOf<UserCreationDto>()

        for (user in users) {
            userDTOs.add(convertToDto(user))
        }

        return userDTOs
    }

    fun findUserById(id: Long): UserCreationDto {
        val user = userRepository.findById(id);

        return convertToDto(user.get())
    }

    fun findAllUsers(): MutableList<UserCreationDto> {
        val users = userRepository.findAll()
        val userDTOs = mutableListOf<UserCreationDto>()

        for (user in users) {
            userDTOs.add(convertToDto(user))
        }

        return userDTOs

    }
}

