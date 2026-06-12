package com.gc.backend.service;

import com.gc.backend.dto.request.CostEstimationRequest;
import com.gc.backend.entity.CostEstimation;

public interface CostEstimationService {

    CostEstimation calculateCost(
            CostEstimationRequest request);
}