package com.codecool.javapassword.service;

import com.codecool.javapassword.modell.Password;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class PasswordGenerator {

    @Autowired
    private Password password;

    public Password generator() {
        Random random = new Random();
        StringBuilder generatedPassword = new StringBuilder();
        for (int i = 0; i < 15; i++) {
            generatedPassword.append(Character.toString(random.nextInt(94) + 33));
        }
        password.setPassword(generatedPassword.toString());
        return password;
    }
}
