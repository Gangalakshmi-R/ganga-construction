package com.gc.backend.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.gc.backend.dto.request.ContactRequest;

import com.gc.backend.entity.ContactMessage;

public interface ContactService {

    ContactMessage saveContact(
        ContactRequest dto
        
    );

}