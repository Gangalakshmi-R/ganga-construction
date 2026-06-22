package com.gc.backend.controller;

import com.gc.backend.dto.request.ContactRequest;

import com.gc.backend.entity.ContactMessage;

import com.gc.backend.service.ContactService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("/api/contact")

@RequiredArgsConstructor

@CrossOrigin("*")

public class ContactController {

    private final ContactService contactMessageService;

    @PostMapping

    public ResponseEntity<ContactMessage> saveContact(

            @RequestBody ContactRequest dto) {

        return ResponseEntity.ok(

                contactMessageService
                        .saveContact(dto));
    }
}