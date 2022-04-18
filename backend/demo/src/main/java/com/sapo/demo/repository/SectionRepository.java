package com.sapo.demo.repository;

import com.sapo.demo.entity.SectionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SectionRepository extends JpaRepository<SectionEntity, Integer> {
}
