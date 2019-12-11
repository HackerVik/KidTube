package com.codecool.userservice;

import com.codecool.userservice.modell.UserModell;
import com.codecool.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Collections;

@Component
public class UserInitializer implements CommandLineRunner {

    private PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {

        UserModell user1 = UserModell.builder()
                .username("user1")
                .email("user1@user1.com")
                .password(passwordEncoder.encode("user1"))
                .roles(Collections.singletonList("ROLE_USER"))
                .build();

        userRepository.save(user1);
    }
}
