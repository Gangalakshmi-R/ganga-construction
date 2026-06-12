package com.gc.backend.repository;

import com.gc.backend.entity.Review;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository
extends JpaRepository<Review, Long> {

}