package com.gc.backend.service;

import com.gc.backend.dto.request.ConsultationRequest;
import com.gc.backend.entity.Consultation;

public interface ConsultationService {

    Consultation createConsultation(
            ConsultationRequest request);

}