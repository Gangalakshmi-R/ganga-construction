package com.gc.backend.entity;

import jakarta.persistence.*;

import lombok.*;

@Entity
@Table(name = "reviews")

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Review extends BaseEntity {

    @Id
    @GeneratedValue(
        strategy = GenerationType.IDENTITY
    )
    private Long id;

    @Column(nullable = false)
    private String name;

    private String role;

    @Column(
        name = "review_message",
        columnDefinition = "TEXT"
    )
    private String review;

    private Integer rating;

    private String imageUrl;

    private String clientLocation;

    private String projectType;
}