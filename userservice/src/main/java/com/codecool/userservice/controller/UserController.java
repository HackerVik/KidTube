package com.codecool.userservice.controller;

import com.codecool.userservice.modell.UserModell;
import com.codecool.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/all")
    public List<UserModell> getAllUser() {
        return userRepository.findAll();
    }

    ;
}
