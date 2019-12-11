package com.codecool.zuul.controller;

import com.codecool.userservice.modell.UserModell;
import com.codecool.zuul.security.JwtTokenServices;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {
    public AuthController(AuthenticationManager authenticationManager, JwtTokenServices jwtTokenServices) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenServices = jwtTokenServices;
    }

    private RestTemplate restTemplate = new RestTemplate();
    private final AuthenticationManager authenticationManager;

    private final JwtTokenServices jwtTokenServices;

    @PostMapping("/login")
    public ResponseEntity signin(@RequestBody UserModell userData, HttpServletResponse response) {


        String token = createToken(userData, null);
        Map<Object, Object> model = new HashMap<>();
        model.put("username", userData.getUsername());
        model.put("token", token);

        return ResponseEntity.ok(model);
    }

    private String createToken(UserModell userData, List<String> roles) {
        String username = userData.getUsername();
        if (roles == null) {
            getRoles(userData, username);
        }
        return jwtTokenServices.createToken(username, roles);
    }

    private List<String> getRoles(UserModell userData, String username) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, userData.getPassword()));
        return authentication.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());
    }
}
