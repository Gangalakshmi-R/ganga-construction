package com.gc.backend.dto.request;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class ContactRequest {

    private String name;

    private String email;

    private String phone;

    private String place;

    private String landDetails;
}