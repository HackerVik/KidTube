package com.codecool.javapassword.controller;

import com.codecool.javapassword.modell.Password;
import com.codecool.javapassword.service.PasswordGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/javapassword")
public class JavaPasswordController {

    @Autowired
    private PasswordGenerator passwordGenerator;

    @GetMapping()
    public Password generate() {
        return passwordGenerator.generator();
    }
}
