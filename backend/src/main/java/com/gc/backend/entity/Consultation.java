package com.gc.backend.entity;

import java.time.LocalDate;

import com.gc.backend.enums.ConsultationStatus;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "consultations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Consultation extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false)
    private String phone;

    private String email;

    @Column(nullable = false)
    private LocalDate preferredDate;

    @Column(columnDefinition = "TEXT")
    private String requirement;

    @Enumerated(EnumType.STRING)
    private ConsultationStatus status;
}