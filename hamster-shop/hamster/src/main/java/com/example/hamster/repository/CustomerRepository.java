package com.example.hamster.repository;

import com.example.hamster.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    Boolean existsByEmail(String email);
    Customer findByAccount_Name(String userName);
}
