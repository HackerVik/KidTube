package com.codecool.javapassword.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/javapassword")
public class JavaPasswordController {


    @GetMapping()
    public String generate() {return "aaaaaaaaaaaa";}
}
