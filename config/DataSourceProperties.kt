package com.ihm.has.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.PropertySource
import org.springframework.stereotype.Component

@Component
@Configuration
@PropertySource("classpath:application.properties")
class DataSourceProperties {
    @Value("\${user}")
    val user: String = ""

    @Value("\${password}")
    val password: String = ""

    @Value("\${dbhost}")
    val dbhost: String = ""

    @Value("\${dbport}")
    val dbport: String = ""

    @Value("\${dbname}")
    val dbname: String = ""
}