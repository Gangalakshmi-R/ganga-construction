package com.gc.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.gc.backend.dto.request.ConsultationRequest;
import com.gc.backend.entity.Consultation;
import com.gc.backend.service.ConsultationService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/consultations")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ConsultationController {

    private final ConsultationService consultationService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Consultation createConsultation(
            @Valid @RequestBody ConsultationRequest request) {

        return consultationService
                .createConsultation(request);
    }
}