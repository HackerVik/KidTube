package com.codecool.userservice.repository;

import com.codecool.userservice.modell.UserModell;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserModell, Long> {
}
