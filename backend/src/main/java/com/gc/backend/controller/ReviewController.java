package com.gc.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

import com.gc.backend.entity.Review;

import com.gc.backend.service.ReviewService;

@RestController

@RequestMapping("/api/reviews")

@RequiredArgsConstructor

@CrossOrigin("*")

public class ReviewController {

    private final
    ReviewService
    reviewService;

    @PostMapping
    public Review createReview(
        @RequestBody
        Review review
    ) {

        return reviewService
                .createReview(review);
    }

    @GetMapping
    public List<Review>
    getAllReviews() {

        return reviewService
                .getAllReviews();
    }

    @DeleteMapping("/{id}")
    public void deleteReview(
        @PathVariable Long id
    ) {

        reviewService
            .deleteReview(id);
    }
}