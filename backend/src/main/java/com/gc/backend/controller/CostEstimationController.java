package com.gc.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.gc.backend.dto.request.CostEstimationRequest;
import com.gc.backend.entity.CostEstimation;
import com.gc.backend.service.CostEstimationService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/cost-estimations")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CostEstimationController {

    private final CostEstimationService
            costEstimationService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CostEstimation calculateCost(
            @Valid @RequestBody
            CostEstimationRequest request) {

        return costEstimationService
                .calculateCost(request);
    }
}