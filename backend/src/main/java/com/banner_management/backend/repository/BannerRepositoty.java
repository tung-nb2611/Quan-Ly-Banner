package com.banner_management.backend.repository;

import com.banner_management.backend.entity.banner.BannerEntity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BannerRepositoty extends JpaRepository<BannerEntity, Integer> {
}
