package com.gc.backend.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.gc.backend.enums.ProjectCategory;
import com.gc.backend.enums.ProjectStatus;

import jakarta.persistence.*;

import lombok.*;

import java.util.List;

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

    @Column(nullable = false)
    private String projectName;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
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

  @JsonIgnore

@OneToMany(
        mappedBy = "project",
        cascade = CascadeType.ALL,
        orphanRemoval = true
)
private List<ProjectImage> images;

@JsonIgnore

@OneToMany(
        mappedBy = "project",
        cascade = CascadeType.ALL,
        orphanRemoval = true
)
private List<ProjectVideo> videos;

}