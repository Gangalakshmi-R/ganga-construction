package com.gc.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gc.backend.entity.Consultation;

public interface ConsultationRepository
        extends JpaRepository<Consultation, Long> {

}