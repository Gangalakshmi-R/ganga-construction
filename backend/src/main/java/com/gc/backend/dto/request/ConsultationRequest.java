package com.gc.backend.dto.request;

import java.time.LocalDate;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ConsultationRequest {

    @NotBlank
    private String fullName;

    @NotBlank
    private String phone;

    @Email
    private String email;

    @NotNull
    private LocalDate preferredDate;

    @NotBlank
    private String requirement;
}