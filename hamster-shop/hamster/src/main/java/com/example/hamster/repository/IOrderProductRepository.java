package com.example.hamster.repository;

import com.example.hamster.model.OrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrderProductRepository extends JpaRepository<OrderProduct,Integer> {
}
