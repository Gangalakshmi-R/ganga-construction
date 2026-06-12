package com.gc.backend.controller;

import com.gc.backend.entity.Project;

import com.gc.backend.service.ProjectService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController

@RequestMapping("/api/projects")

@RequiredArgsConstructor

@CrossOrigin("*")

public class ProjectController {

    private final ProjectService
            projectService;
@PostMapping(
        consumes =
        MediaType.MULTIPART_FORM_DATA_VALUE)

public Project createProject(

        @RequestParam String projectName,

        @RequestParam String category,

        @RequestParam String location,

        @RequestParam Double areaSqft,

        @RequestParam Double budget,

        @RequestParam String startDate,

        @RequestParam String completionDate,

        @RequestParam String status,

        @RequestParam String description,

        @RequestParam MultipartFile image) {

    return projectService.createProject(

            projectName,

            category,

            location,

            areaSqft,

            budget,

            startDate,

            completionDate,

            status,

            description,

            image);
}

    @GetMapping

    public List<Project> getAllProjects() {

        return projectService.getAllProjects();
    }

    @DeleteMapping("/{id}")

public ResponseEntity<String>
deleteProject(
    @PathVariable Long id
) {

    projectService
        .deleteProject(id);

    return ResponseEntity.ok(
        "Project deleted successfully"
    );
}
}