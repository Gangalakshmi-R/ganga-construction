package com.gc.backend.repository;

import com.gc.backend.entity.ContactMessage;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactMessageRepository
extends JpaRepository<
    ContactMessage,
    Long
> {
}