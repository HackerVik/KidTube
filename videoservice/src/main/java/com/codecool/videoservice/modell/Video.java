package com.codecool.videoservice.modell;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Video {

    @GeneratedValue
    @Id
    private Long id;

    @NotEmpty
    private String name;

    @NotEmpty
    private String url;

    private boolean ispublic;
    private String owner;
}
