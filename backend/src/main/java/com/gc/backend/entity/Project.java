package com.gc.backend.entity;

import java.time.LocalDate;

import com.gc.backend.entity.enums.ProjectCategory;
import com.gc.backend.entity.enums.ProjectStatus;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "projects")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Project extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String projectName;

    @Enumerated(EnumType.STRING)
    private ProjectCategory category;

    private String location;

    private Double areaSqft;

    private Double budget;

    private LocalDate startDate;

    private LocalDate completionDate;

    @Enumerated(EnumType.STRING)
    private ProjectStatus status;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String thumbnailUrl;
}