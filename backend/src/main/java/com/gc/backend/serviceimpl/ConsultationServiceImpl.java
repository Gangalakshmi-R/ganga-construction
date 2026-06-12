package com.gc.backend.serviceimpl;

import org.springframework.stereotype.Service;

import com.gc.backend.dto.request.ConsultationRequest;
import com.gc.backend.entity.Consultation;
import com.gc.backend.enums.ConsultationStatus;
import com.gc.backend.repository.ConsultationRepository;
import com.gc.backend.service.ConsultationService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ConsultationServiceImpl
        implements ConsultationService {

    private final ConsultationRepository consultationRepository;

    @Override
    public Consultation createConsultation(
            ConsultationRequest request) {

        Consultation consultation =
                Consultation.builder()
                        .fullName(request.getFullName())
                        .phone(request.getPhone())
                        .email(request.getEmail())
                        .preferredDate(request.getPreferredDate())
                        .requirement(request.getRequirement())
                        .status(ConsultationStatus.PENDING)
                        .build();

        return consultationRepository.save(consultation);
    }
}