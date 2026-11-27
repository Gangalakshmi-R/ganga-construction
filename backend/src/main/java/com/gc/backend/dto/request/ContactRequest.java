package com.gc.backend.dto.request;

import jakarta.validation.constraints.Email;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class ContactRequest {

    private String name;

    @Email
    private String email;

    private String phone;

    private String place;

    private String landDetails;
}