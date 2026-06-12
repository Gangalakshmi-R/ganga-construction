package com.gc.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.gc.backend.dto.request.EnquiryRequest;
import com.gc.backend.entity.Enquiry;
import com.gc.backend.service.EnquiryService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/enquiries")
@RequiredArgsConstructor
@CrossOrigin("*")
public class EnquiryController {

    private final EnquiryService enquiryService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Enquiry createEnquiry(
            @Valid @RequestBody EnquiryRequest request) {

        return enquiryService.createEnquiry(request);
    }
}