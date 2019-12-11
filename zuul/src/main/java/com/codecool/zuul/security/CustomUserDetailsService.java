package com.codecool.zuul.security;

import com.codecool.userservice.modell.UserModell;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.stream.Collectors;

@Component
public class CustomUserDetailsService implements UserDetailsService {

    RestTemplate restTemplate = new RestTemplate();

    public UserModell getUserByname(String name) {

        ResponseEntity<UserModell> response = restTemplate.exchange(
                "http://localhost:8083/user/" + name,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<UserModell>() {
                }
        );
        return response.getBody();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserModell user = getUserByname(username);//.orElseThrow(() -> new UsernameNotFoundException("Username " + username + " not found"));
        return new User(user.getUsername(), user.getPassword(), user.getRoles().stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList()));
    }
}
