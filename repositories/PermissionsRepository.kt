package com.ihm.has.repositories

import com.ihm.has.entities.Permissions
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface PermissionsRepository: JpaRepository<Permissions, Int> {
}