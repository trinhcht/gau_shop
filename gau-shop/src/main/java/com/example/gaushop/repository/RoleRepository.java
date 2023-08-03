package com.example.gaushop.repository;

import com.example.gaushop.model.Role;
import com.example.gaushop.model.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByName(RoleName name);
}
