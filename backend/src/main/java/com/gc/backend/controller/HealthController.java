package com.gc.backend.controller;

import java.time.Instant;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Lightweight health-check endpoint for uptime monitors (UptimeRobot).
 * Deliberately does NOT touch the database or any external service, so it
 * answers instantly and keeps the Render free instance awake.
 * Spring answers HEAD requests on GET mappings automatically.
 */
@RestController
@CrossOrigin("*")
public class HealthController {

    @GetMapping({"/api/health", "/health"})
    public Map<String, Object> health() {
        return Map.of(
                "status", "UP",
                "service", "ganga-construction-backend",
                "timestamp", Instant.now().toString());
    }
}
