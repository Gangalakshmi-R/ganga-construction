package com.gc.backend.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EnquiryRequest {

    @NotBlank
    private String fullName;

    @NotBlank
    private String phone;

    @Email
    private String email;

    @NotBlank
    private String requirement;
}