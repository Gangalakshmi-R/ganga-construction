
package com.gc.backend.serviceimpl;

import com.gc.backend.dto.request.ContactRequest;
import com.gc.backend.dto.request.CostEstimationRequest;
import com.gc.backend.entity.CostEstimation;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String senderEmail;

    @Value("${app.mail.to}")
    private String recipientEmail;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    // Send contact enquiry notification
    public void sendContactNotification(ContactRequest request) {

        SimpleMailMessage mail = new SimpleMailMessage();

        mail.setFrom(senderEmail);
        mail.setTo(recipientEmail);
        mail.setReplyTo(request.getEmail());
        mail.setSubject("New Customer Enquiry - Ganga Construction");

        mail.setText(
            "NEW CUSTOMER ENQUIRY\n\n" +
            "Customer Name: " + request.getName() + "\n" +
            "Email: " + request.getEmail() + "\n" +
            "Phone: " + request.getPhone() + "\n" +
            "Location: " + request.getPlace() + "\n" +
            "Land Details: " + request.getLandDetails() + "\n\n" +
            "Please contact the customer.\n\n" +
            "Ganga Construction"
        );

        mailSender.send(mail);
    }

    // Send cost estimation notification
    public void sendCostEstimationNotification(
            CostEstimationRequest request,
            CostEstimation estimation) {

        SimpleMailMessage mail = new SimpleMailMessage();

        mail.setFrom(senderEmail);
        mail.setTo(recipientEmail);

        if (request.getEmail() != null &&
                !request.getEmail().isBlank()) {
            mail.setReplyTo(request.getEmail());
        }

        mail.setSubject(
            "New Cost Estimation Request - Ganga Construction"
        );

        mail.setText(
            "NEW COST ESTIMATION REQUEST\n\n" +

            "CUSTOMER DETAILS\n" +
            "Name: " + request.getFullName() + "\n" +
            "Phone: " + request.getPhone() + "\n" +
            "Email: " + request.getEmail() + "\n\n" +

            "CONSTRUCTION DETAILS\n" +
            "Building Type: " + request.getBuildingType() + "\n" +
            "Area: " + request.getAreaSqft() + " Sq.ft\n" +
            "Floors: " + request.getFloors() + "\n" +
            "Quality: " + request.getQualityType() + "\n\n" +

            "ESTIMATION DETAILS\n" +
            "Estimated Cost: Rs. " +
            estimation.getEstimatedCost() + "\n\n" +

            "Please contact the customer to discuss the project.\n\n" +
            "Ganga Construction"
        );

        mailSender.send(mail);
    }
}
