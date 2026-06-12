package com.gc.backend.entity;

import com.gc.backend.enums.EnquiryStatus;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "enquiries")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Enquiry extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false)
    private String phone;

    private String email;

    @Column(columnDefinition = "TEXT")
    private String requirement;

    @Enumerated(EnumType.STRING)
    private EnquiryStatus status;
}