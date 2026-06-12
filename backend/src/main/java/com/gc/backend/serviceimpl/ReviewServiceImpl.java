package com.gc.backend.serviceimpl;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

import com.gc.backend.entity.Review;

import com.gc.backend.repository.ReviewRepository;

import com.gc.backend.service.ReviewService;

@Service
@RequiredArgsConstructor

public class ReviewServiceImpl
implements ReviewService {

    private final
    ReviewRepository
    reviewRepository;

    @Override
    public Review createReview(
        Review review
    ) {

        return reviewRepository
                .save(review);
    }

    @Override
    public List<Review>
    getAllReviews() {

        return reviewRepository
                .findAll();
    }

    @Override
    public void deleteReview(
        Long id
    ) {

        reviewRepository
            .deleteById(id);
    }
}