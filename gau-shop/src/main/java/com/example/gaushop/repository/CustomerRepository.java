package com.example.gaushop.repository;

import com.example.gaushop.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    Boolean existsByEmail(String email);
    Customer findByAccount_Name(String userName);
}
