package com.gc.backend.serviceimpl;

import java.nio.charset.StandardCharsets;
import java.text.NumberFormat;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.util.HtmlUtils;

import com.gc.backend.dto.request.ContactRequest;
import com.gc.backend.dto.request.CostEstimationRequest;
import com.gc.backend.entity.CostEstimation;

import jakarta.mail.internet.MimeMessage;

/**
 * Sends HTML emails for contact enquiries and cost estimations.
 *
 * Every public method is @Async so the API response is never held up by
 * SMTP, and every failure is caught + logged here (an email problem must
 * never fail the customer's request).
 */
@Service
public class EmailService {

    private static final Logger log =
            LoggerFactory.getLogger(EmailService.class);

    private static final String COMPANY = "Ganga Construction";

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username:}")
    private String senderEmail;

    @Value("${app.mail.to:gangalakshmi1662006@gmail.com}")
    private String recipientEmail;

    // Shown to customers in confirmation emails
    @Value("${app.company.phone:}")
    private String companyPhone;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    // ------------------------------------------------------------------
    // Contact enquiry
    // ------------------------------------------------------------------

    @Async
    public void sendContactNotification(ContactRequest request) {

        // 1) Notify the business
        send(
            recipientEmail,
            request.getEmail(),
            "New Customer Enquiry - " + COMPANY,
            layout(
                "New Customer Enquiry",
                "<p>A customer has submitted a contact enquiry.</p>" +
                table(
                    row("Name", request.getName()),
                    row("Email", request.getEmail()),
                    row("Phone", request.getPhone()),
                    row("Location", request.getPlace()),
                    row("Land Details", request.getLandDetails())
                ) +
                "<p>Please contact the customer.</p>"
            )
        );

        // 2) Acknowledge the customer (only if they gave an email)
        if (hasText(request.getEmail())) {
            send(
                request.getEmail(),
                recipientEmail,
                "We received your enquiry - " + COMPANY,
                layout(
                    "Thank you for contacting us",
                    "<p>Dear " + esc(request.getName()) + ",</p>" +
                    "<p>Thank you for reaching out to " + COMPANY +
                    ". We have received your enquiry and our team " +
                    "will get back to you shortly.</p>" +
                    contactLine()
                )
            );
        }
    }

    // ------------------------------------------------------------------
    // Cost estimation
    // ------------------------------------------------------------------

    @Async
    public void sendCostEstimationNotification(
            CostEstimationRequest request,
            CostEstimation estimation) {

        String cost = formatRupees(estimation.getEstimatedCost());

        // 1) Notify the business
        send(
            recipientEmail,
            request.getEmail(),
            "New Cost Estimation Request - " + COMPANY,
            layout(
                "New Cost Estimation Request",
                "<h3>Customer Details</h3>" +
                table(
                    row("Name", request.getFullName()),
                    row("Phone", request.getPhone()),
                    row("Email", request.getEmail())
                ) +
                "<h3>Construction Details</h3>" +
                table(
                    row("Building Type", str(request.getBuildingType())),
                    row("Area", request.getAreaSqft() + " Sq.ft"),
                    row("Floors", str(request.getFloors())),
                    row("Quality", str(request.getQualityType()))
                ) +
                "<h3>Estimation</h3>" +
                table(row("Estimated Cost", cost)) +
                "<p>Please contact the customer to discuss the project.</p>"
            )
        );

        // 2) Send the customer a copy of their estimate
        if (hasText(request.getEmail())) {
            send(
                request.getEmail(),
                recipientEmail,
                "Your construction cost estimate - " + COMPANY,
                layout(
                    "Your Cost Estimate",
                    "<p>Dear " + esc(request.getFullName()) + ",</p>" +
                    "<p>Thank you for using our cost estimator. " +
                    "Here is a summary of your estimate:</p>" +
                    table(
                        row("Building Type", str(request.getBuildingType())),
                        row("Area", request.getAreaSqft() + " Sq.ft"),
                        row("Floors", str(request.getFloors())),
                        row("Quality", str(request.getQualityType())),
                        row("Estimated Cost", cost)
                    ) +
                    "<p style=\"color:#666;font-size:13px\">This is an " +
                    "approximate figure. The final cost depends on site " +
                    "conditions, design and material choices.</p>" +
                    "<p>Our team will contact you to discuss your project.</p>" +
                    contactLine()
                )
            );
        }
    }

    // ------------------------------------------------------------------
    // Internals
    // ------------------------------------------------------------------

    private void send(String to, String replyTo, String subject, String html) {
        if (!hasText(senderEmail)) {
            log.warn("Email skipped (GMAIL_USERNAME not configured): '{}'", subject);
            return;
        }
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(
                    message, false, StandardCharsets.UTF_8.name());

            helper.setFrom(senderEmail, COMPANY);
            helper.setTo(to);
            if (hasText(replyTo)) {
                helper.setReplyTo(replyTo);
            }
            helper.setSubject(subject);
            helper.setText(html, true);

            mailSender.send(message);
            log.info("Email sent: '{}'", subject);
        } catch (Exception e) {
            log.error("Email failed: '{}' - {}", subject, e.getMessage());
        }
    }

    private String layout(String title, String body) {
        return "<div style=\"font-family:Arial,sans-serif;max-width:600px;" +
               "margin:auto;border:1px solid #e0e0e0;border-radius:8px;" +
               "overflow:hidden\">" +
               "<div style=\"background:#0a1929;color:#fff;padding:16px 24px\">" +
               "<h2 style=\"margin:0;color:#2dd4bf\">" + COMPANY + "</h2>" +
               "</div>" +
               "<div style=\"padding:24px;color:#222;line-height:1.5\">" +
               "<h2 style=\"margin-top:0\">" + esc(title) + "</h2>" +
               body +
               "<p style=\"margin-bottom:0\">Regards,<br>" + COMPANY + "</p>" +
               "</div></div>";
    }

    private String table(String... rows) {
        return "<table style=\"border-collapse:collapse;width:100%\">" +
               String.join("", rows) + "</table>";
    }

    private String row(String label, String value) {
        return "<tr><td style=\"padding:6px 8px;border-bottom:1px solid #eee;" +
               "font-weight:bold;width:35%\">" + esc(label) + "</td>" +
               "<td style=\"padding:6px 8px;border-bottom:1px solid #eee\">" +
               esc(value) + "</td></tr>";
    }

    private String contactLine() {
        return hasText(companyPhone)
                ? "<p>For anything urgent, call us on <b>" +
                  esc(companyPhone) + "</b>.</p>"
                : "";
    }

    // Escape user input so it can't inject HTML into the emails
    private String esc(String value) {
        return value == null ? "-" : HtmlUtils.htmlEscape(value);
    }

    private String str(Object value) {
        return value == null ? null : value.toString();
    }

    private boolean hasText(String s) {
        return s != null && !s.isBlank();
    }

    private String formatRupees(Double amount) {
        if (amount == null) {
            return "-";
        }
        return "Rs. " + NumberFormat
                .getNumberInstance(new Locale("en", "IN"))
                .format(Math.round(amount));
    }
}
