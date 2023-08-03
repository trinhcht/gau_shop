package com.example.gaushop.repository;

import com.example.gaushop.model.OrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrderProductRepository extends JpaRepository<OrderProduct,Integer> {
}
