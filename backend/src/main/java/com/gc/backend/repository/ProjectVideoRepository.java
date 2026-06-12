package com.gc.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gc.backend.entity.ProjectVideo;

public interface ProjectVideoRepository extends JpaRepository<ProjectVideo, Long> {

    List<ProjectVideo> findByProjectId(Long projectId);

}