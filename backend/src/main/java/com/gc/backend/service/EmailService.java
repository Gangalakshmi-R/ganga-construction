package com.gc.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

@Autowired
private JavaMailSender mailSender;

    public void sendAdminNotification(
            String name,
            String phone,
            String email,
            String location,
            String requirements) {

        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo("tlr.engineer@gmail.com");
        message.setSubject("New Consultation Request");

        message.setText(
                "Name: " + name +
                "\nPhone: " + phone +
                "\nEmail: " + email +
                "\nLocation: " + location +
                "\nRequirements: " + requirements
        );

        mailSender.send(message);
    }

    public void sendCustomerConfirmation(
            String customerEmail,
            String customerName) {

        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(customerEmail);

        message.setSubject(
                "Thank You For Contacting Ganga Constructions"
        );

        message.setText(
                "Dear " + customerName + ",\n\n" +
                "Thank you for contacting Ganga Constructions.\n\n" +
                "We have received your enquiry and our team will contact you within 24 hours.\n\n" +
                "Regards,\n" +
                "Ganga Constructions"
        );

        mailSender.send(message);
    }
}