
package com.gc.backend.serviceimpl;

import com.gc.backend.dto.request.ContactRequest;
import com.gc.backend.entity.ContactMessage;
import com.gc.backend.repository.ContactMessageRepository;
import com.gc.backend.service.ContactService;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements ContactService {

    private final ContactMessageRepository contactMessageRepository;

    private final EmailService emailService;

    @Override
    public ContactMessage saveContact(ContactRequest dto) {

        ContactMessage contact = ContactMessage.builder()
                .name(dto.getName())
                .email(dto.getEmail())
                .phone(dto.getPhone())
                .place(dto.getPlace())
                .landDetails(dto.getLandDetails())
                .build();

        // First save customer enquiry to database
        ContactMessage savedContact =
                contactMessageRepository.save(contact);

        // Then send notification email
        try {
            emailService.sendContactNotification(dto);
        } catch (Exception e) {
            System.err.println(
                "Contact email notification failed: "
                + e.getMessage()
            );
        }

        return savedContact;
    }
}
