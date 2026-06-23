
package com.gc.backend.serviceimpl;

import com.gc.backend.dto.request.ContactRequest;

import com.gc.backend.entity.ContactMessage;

import com.gc.backend.repository.ContactMessageRepository;

import com.gc.backend.service.ContactService;
import com.gc.backend.service.EmailService;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

@Service

@RequiredArgsConstructor

public class ContactServiceImpl
implements ContactService {

    private final
    ContactMessageRepository
        contactMessageRepository;

    private final EmailService emailService;

    @Override

    public ContactMessage saveContact(
        ContactRequest dto
    ) {

        ContactMessage contact =
            ContactMessage.builder()

            .name(
                dto.getName()
            )

            .email(
                dto.getEmail()
            )

            .phone(
                dto.getPhone()
            )

            .place(
                dto.getPlace()
            )

            .landDetails(
                dto.getLandDetails()
            )

            .build();

       ContactMessage saved =
    contactMessageRepository
        .save(contact);

emailService.sendAdminNotification(
    saved.getName(),
    saved.getPhone(),
    saved.getEmail(),
    saved.getPlace(),
    saved.getLandDetails()
);

emailService.sendCustomerConfirmation(
    saved.getEmail(),
    saved.getName()
);

return saved;
    }
}