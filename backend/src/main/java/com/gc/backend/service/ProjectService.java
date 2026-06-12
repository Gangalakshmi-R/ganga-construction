package com.gc.backend.service;

import com.gc.backend.entity.Project;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ProjectService {

    Project createProject(

        String projectName,

        String category,

        String location,

        Double areaSqft,

        Double budget,

        String startDate,

        String completionDate,

        String status,

        String description,

        MultipartFile image);

    List<Project> getAllProjects();

    void deleteProject(
    Long id
);
}