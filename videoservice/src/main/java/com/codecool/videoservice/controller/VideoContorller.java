package com.codecool.videoservice.controller;

import com.codecool.videoservice.modell.Video;
import com.codecool.videoservice.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/video")
@CrossOrigin
public class VideoContorller {

    @Autowired
    private VideoRepository videoRepository;

    @GetMapping("/all")
    public List<Video> allVideos() {
        return videoRepository.findAll();
    }

    @GetMapping("/search/{search}")
    public List<Video> searchVideos(@PathVariable("search")String search) {return videoRepository.findAllByNameContainsIgnoreCase(search);}
}
