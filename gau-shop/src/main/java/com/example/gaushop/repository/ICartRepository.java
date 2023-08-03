package com.example.gaushop.repository;

import com.example.gaushop.model.Cart;
import com.example.gaushop.model.IdCart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ICartRepository extends JpaRepository<Cart, IdCart> {
    List<Cart> findByCustomer_Account_NameAndStatus(String nameAcc,Integer status);
}
