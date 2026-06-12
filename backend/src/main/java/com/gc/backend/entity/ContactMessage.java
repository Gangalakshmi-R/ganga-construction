package com.gc.backend.entity;

import jakarta.persistence.*;

import lombok.*;

@Entity
@Table(name = "contact_messages")

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class ContactMessage
extends BaseEntity {

    @Id

    @GeneratedValue(
        strategy =
            GenerationType.IDENTITY
    )
    private Long id;

    private String name;

    private String email;

    private String phone;

    private String place;

    @Column(
        columnDefinition = "TEXT"
    )
    private String landDetails;
}