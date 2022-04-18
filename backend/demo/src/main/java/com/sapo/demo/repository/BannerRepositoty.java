package com.sapo.demo.repository;

import com.sapo.demo.entity.BannerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BannerRepositoty extends JpaRepository<BannerEntity, Integer> {
}
