package com.gc.backend.serviceimpl;

import org.springframework.stereotype.Service;

import com.gc.backend.dto.request.EnquiryRequest;
import com.gc.backend.entity.Enquiry;
import com.gc.backend.enums.EnquiryStatus;
import com.gc.backend.repository.EnquiryRepository;
import com.gc.backend.service.EnquiryService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EnquiryServiceImpl implements EnquiryService {

    private final EnquiryRepository enquiryRepository;

    @Override
    public Enquiry createEnquiry(EnquiryRequest request) {

        Enquiry enquiry = Enquiry.builder()
                .fullName(request.getFullName())
                .phone(request.getPhone())
                .email(request.getEmail())
                .requirement(request.getRequirement())
                .status(EnquiryStatus.NEW)
                .build();

        return enquiryRepository.save(enquiry);
    }
}