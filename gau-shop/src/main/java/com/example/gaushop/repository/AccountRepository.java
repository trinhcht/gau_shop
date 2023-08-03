package com.example.gaushop.repository;

import com.example.gaushop.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account, Integer> {
    Optional<Account> findByName(String username);

    Boolean existsByName(String username);
}
