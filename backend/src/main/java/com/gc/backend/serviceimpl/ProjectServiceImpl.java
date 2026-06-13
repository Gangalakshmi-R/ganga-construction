package com.gc.backend.serviceimpl;

import com.gc.backend.entity.Project;

import com.gc.backend.repository.ProjectRepository;

import com.gc.backend.service.ProjectService;

import com.gc.backend.util.FileUploadUtil;
import com.gc.backend.enums.ProjectCategory;

import com.gc.backend.enums.ProjectStatus;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service

@RequiredArgsConstructor

public class ProjectServiceImpl
        implements ProjectService {

    private final ProjectRepository
            projectRepository;

    private final FileUploadUtil
            fileUploadUtil;

@Override
public Project createProject(

        String projectName,
        String category,
        String location,
        Double areaSqft,
        Double budget,
        String startDate,
        String completionDate,
        String status,
        String description,
        MultipartFile image) {

    String imageUrl =
            fileUploadUtil.uploadFile(image);

    Project project = new Project();

    project.setProjectName(projectName);

    project.setCategory(
            ProjectCategory.valueOf(
                    category.toUpperCase()
            )
    );

    project.setLocation(location);

    project.setAreaSqft(areaSqft);

    project.setBudget(budget);

    project.setStartDate(
            java.time.LocalDate.parse(startDate)
    );

    project.setCompletionDate(
            java.time.LocalDate.parse(completionDate)
    );

    project.setStatus(
            ProjectStatus.valueOf(
                    status.toUpperCase()
            )
    );

    project.setDescription(description);

    project.setThumbnailUrl(imageUrl);

    return projectRepository.save(project);
}


    @Override
    public List<Project> getAllProjects() {

        return projectRepository.findAll();
    }

    @Override

public void deleteProject(
    Long id
) {

    projectRepository
        .deleteById(id);
}
}