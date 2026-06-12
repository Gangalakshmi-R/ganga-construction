package com.gc.backend.entity;

import com.gc.backend.enums.BuildingType;
import com.gc.backend.enums.QualityType;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "cost_estimations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CostEstimation extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;

    private String phone;

    private String email;

    @Enumerated(EnumType.STRING)
    private BuildingType buildingType;

    private Double areaSqft;

    private Integer floors;

    @Enumerated(EnumType.STRING)
    private QualityType qualityType;

    private Double estimatedCost;
}