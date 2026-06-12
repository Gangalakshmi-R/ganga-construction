package com.gc.backend.service;

import java.util.List;

import com.gc.backend.entity.Review;

public interface ReviewService {

    Review createReview(
        Review review
    );

    List<Review> getAllReviews();

    void deleteReview(
        Long id
    );
}