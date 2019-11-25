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

    @Bean
    public CommandLineRunner init() {
        return args -> {

            Video video1 = Video.builder()
                    .name("The Animal Sounds Song")
                    .url("https://www.youtube.com/watch?v=t99ULJjCsaM")
                    .build();
            Video video2 = Video.builder()
                    .name("5 Little Ducks")
                    .url("https://www.youtube.com/watch?v=HOWt5un1-Ts")
                    .build();
            Video video3 = Video.builder()
                    .name("The Wheels On The Bus")
                    .url("https://www.youtube.com/watch?v=2FI3p79Jq-k")
                    .build();
            Video video4 = Video.builder()
                    .name("It's the Alphabet")
                    .url("https://www.youtube.com/watch?v=ggyJJ60RbBA")
                    .build();
            Video video5 = Video.builder()
                    .name("The Baby Animals Song")
                    .url("https://www.youtube.com/watch?v=cJg4YFtvOp8")
                    .build();
            Video video6 = Video.builder()
                    .name("Old MacDonald had a Farm")
                    .url("https://www.youtube.com/watch?v=vPd7TaUhYTE")
                    .build();
            Video video7 = Video.builder()
                    .name("Counting Song")
                    .url("https://www.youtube.com/watch?v=6RfIKqkvHTY")
                    .build();
            Video video8 = Video.builder()
                    .name("Shapes Song 2")
                    .url("https://www.youtube.com/watch?v=WTeqUejf3D0")
                    .build();
            Video video9 = Video.builder()
                    .name("On the Farm")
                    .url("https://www.youtube.com/watch?v=9uuh3zG21ts")
                    .build();
            Video video10 = Video.builder()
                    .name("Colors Song")
                    .url("https://www.youtube.com/watch?v=tQASh8bbkUY")
                    .build();
            Video video11 = Video.builder()
                    .name("The Tank You Song")
                    .url("https://www.youtube.com/watch?v=OcfqDPAy7zc")
                    .build();
            Video video12 = Video.builder()
                    .name("The Planets Song")
                    .url("https://www.youtube.com/watch?v=Wd_EIdZrvaU")
                    .build();
            Video video13 = Video.builder()
                    .name("Red Rabbit Green Gorilla")
                    .url("https://www.youtube.com/watch?v=kxSWGIm2XtI")
                    .build();
            Video video14 = Video.builder()
                    .name("In the Garden Song")
                    .url("https://www.youtube.com/watch?v=RCClYcU97PA")
                    .build();
            Video video15 = Video.builder()
                    .name("We are the Alphabet")
                    .url("https://www.youtube.com/watch?v=w_-lz2BI2Co")
                    .build();
            Video video16 = Video.builder()
                    .name("The 50 States Song")
                    .url("https://www.youtube.com/watch?v=cMp3-fDL6Do")
                    .build();
            Video video17 = Video.builder()
                    .name("I Love You")
                    .url("https://www.youtube.com/watch?v=4aG09eyYNpQ")
                    .build();
            Video video18 = Video.builder()
                    .name("Bingo Song")
                    .url("https://www.youtube.com/watch?v=9mmF8zOlh_g")
                    .build();
            Video video19 = Video.builder()
                    .name("Five Little Monkeys")
                    .url("https://www.youtube.com/watch?v=ZhODBFQ2-bQ")
                    .build();
            Video video20 = Video.builder()
                    .name("The Skeleton Dance")
                    .url("https://www.youtube.com/watch?v=Jpvuqj5nv6U")
                    .build();

            videoRepository.save(video1);
            videoRepository.save(video2);
            videoRepository.save(video3);
            videoRepository.save(video4);
            videoRepository.save(video5);
            videoRepository.save(video6);
            videoRepository.save(video7);
            videoRepository.save(video8);
            videoRepository.save(video9);
            videoRepository.save(video10);
            videoRepository.save(video11);
            videoRepository.save(video12);
            videoRepository.save(video13);
            videoRepository.save(video14);
            videoRepository.save(video15);
            videoRepository.save(video16);
            videoRepository.save(video17);
            videoRepository.save(video18);
            videoRepository.save(video19);
            videoRepository.save(video20);

        };
    }
}
