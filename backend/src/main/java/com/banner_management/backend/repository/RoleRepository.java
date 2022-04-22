package com.banner_management.backend.repository;

import java.util.Optional;

import com.banner_management.backend.entity.ERole;
import com.banner_management.backend.entity.Role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}