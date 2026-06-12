package com.gc.backend.serviceimpl;

import org.springframework.stereotype.Service;

import com.gc.backend.dto.request.CostEstimationRequest;
import com.gc.backend.entity.CostEstimation;
import com.gc.backend.repository.CostEstimationRepository;
import com.gc.backend.service.CostEstimationService;
import com.gc.backend.util.CostCalculatorUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CostEstimationServiceImpl
        implements CostEstimationService {

    private final CostEstimationRepository
            costEstimationRepository;

    private final CostCalculatorUtil
            costCalculatorUtil;

    @Override
    public CostEstimation calculateCost(
            CostEstimationRequest request) {

        double estimatedCost =
                costCalculatorUtil.calculateCost(
                        request.getAreaSqft(),
                        request.getFloors(),
                        request.getQualityType()
                );

        CostEstimation estimation =
                CostEstimation.builder()
                        .fullName(request.getFullName())
                        .phone(request.getPhone())
                        .email(request.getEmail())
                        .buildingType(request.getBuildingType())
                        .areaSqft(request.getAreaSqft())
                        .floors(request.getFloors())
                        .qualityType(request.getQualityType())
                        .estimatedCost(estimatedCost)
                        .build();

        return costEstimationRepository
                .save(estimation);
    }
}