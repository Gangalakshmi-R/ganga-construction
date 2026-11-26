
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

    private final EmailService emailService;

    @Override
    public CostEstimation calculateCost(
            CostEstimationRequest request) {

        // Calculate construction cost
        double estimatedCost =
                costCalculatorUtil.calculateCost(
                        request.getAreaSqft(),
                        request.getFloors(),
                        request.getQualityType()
                );

        // Create estimation record
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

        // Save estimation to database
        CostEstimation savedEstimation =
                costEstimationRepository.save(estimation);

        // Send email notification
        try {
            emailService.sendCostEstimationNotification(
                    request,
                    savedEstimation
            );
        } catch (Exception e) {
            System.err.println(
                "Cost estimation email notification failed: "
                + e.getMessage()
            );
        }

        return savedEstimation;
    }
}
