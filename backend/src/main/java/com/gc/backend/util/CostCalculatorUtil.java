package com.gc.backend.util;

import org.springframework.stereotype.Component;

import com.gc.backend.enums.QualityType;

@Component
public class CostCalculatorUtil {

    public double calculateCost(
            Double areaSqft,
            Integer floors,
            QualityType qualityType) {

        double rate;

        switch (qualityType) {
            case BASIC:
                rate = 1800;
                break;

            case STANDARD:
                rate = 2200;
                break;

            case PREMIUM:
                rate = 2800;
                break;

            case LUXURY:
                rate = 3500;
                break;

            default:
                rate = 2200;
        }

        return areaSqft * floors * rate;
    }
}