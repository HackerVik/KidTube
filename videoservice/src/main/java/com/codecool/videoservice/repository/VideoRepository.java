package com.codecool.videoservice.repository;

import com.codecool.videoservice.modell.Video;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface VideoRepository extends JpaRepository<Video, Long> {
    List<Video> findAllByNameContainsIgnoreCase(String search);

    List<Video> findAllByOrderByNameAsc();

    List<Video> findAllByOrderByNameDesc();

    List<Video> findAllByOrderByIdAsc();

    List<Video> findAllByOrderByIdDesc();
}
