package com.codecool.userservice.controller;

import com.codecool.userservice.modell.UserModell;
import com.codecool.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{user}")
    public UserModell getUser(@PathVariable("user")String user) {
        return userRepository.findByUsername(user);
    }
}
