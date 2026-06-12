package com.gc.backend.dto.request;

import com.gc.backend.enums.BuildingType;
import com.gc.backend.enums.QualityType;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CostEstimationRequest {

    @NotBlank
    private String fullName;

    @NotBlank
    private String phone;

    @Email
    private String email;

    @NotNull
    private BuildingType buildingType;

    @NotNull
    private Double areaSqft;

    @NotNull
    private Integer floors;

    @NotNull
    private QualityType qualityType;
}