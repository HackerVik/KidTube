package com.codecool.videoservice;

import com.codecool.videoservice.modell.Video;
import com.codecool.videoservice.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableEurekaClient
@EnableSwagger2
public class VideoserviceApplication {

    @Autowired
    private VideoRepository videoRepository;

    public static void main(String[] args) {
        SpringApplication.run(VideoserviceApplication.class, args);
    }

    @Bean
    public Docket docket() {
        return new Docket(DocumentationType.SWAGGER_2).select().paths(PathSelectors.any()).apis(RequestHandlerSelectors.any()).build();
    }

    ;

    @Bean
    public CommandLineRunner init() {
        return args -> {

            Video video1 = Video.builder()
                    .name("video1")
                    .url("https://www.youtube.com/watch?v=tsC4bIP0Jl4&list=PL0JbT22qQL-OzeaukJH-QEUnd7JHteC7I&index=1")
                    .build();
            Video video2 = Video.builder()
                    .name("video2")
                    .url("https://www.youtube.com/watch?v=APQgg7gDrfg&list=PL0JbT22qQL-OzeaukJH-QEUnd7JHteC7I&index=2")
                    .build();
            Video video3 = Video.builder()
                    .name("video3")
                    .url("https://www.youtube.com/watch?v=_Op_sKBWBlk&list=PL0JbT22qQL-OzeaukJH-QEUnd7JHteC7I&index=3")
                    .build();
            Video video4 = Video.builder()
                    .name("video4")
                    .url("https://www.youtube.com/watch?v=4JUkIM16_Ms&list=PL0JbT22qQL-OzeaukJH-QEUnd7JHteC7I&index=4")
                    .build();

            videoRepository.save(video1);
            videoRepository.save(video2);
            videoRepository.save(video3);
            videoRepository.save(video4);

        };
    }
}
