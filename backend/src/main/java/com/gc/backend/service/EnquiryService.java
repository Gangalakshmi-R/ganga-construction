package com.gc.backend.service;

import com.gc.backend.dto.request.EnquiryRequest;
import com.gc.backend.entity.Enquiry;

public interface EnquiryService {

    Enquiry createEnquiry(EnquiryRequest request);
}