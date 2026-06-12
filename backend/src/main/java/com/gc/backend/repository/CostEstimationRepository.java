package com.gc.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gc.backend.entity.CostEstimation;

public interface CostEstimationRepository
        extends JpaRepository<CostEstimation, Long> {
}