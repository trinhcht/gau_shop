package com.example.gaushop.service;

import com.example.gaushop.model.Cart;
import com.example.gaushop.model.CartDTO;
import com.example.gaushop.model.IdCart;

import java.io.UnsupportedEncodingException;
import java.util.List;

public interface ICartService {
    List<Cart> findByNameAcc(String name);
    Cart findById(IdCart idCart);
    void save(Cart cart);
    String pay(String userName) throws UnsupportedEncodingException;
    void addCart(CartDTO cartDTO);

    void delete(IdCart idCart);
    void sendEmail(String email);
}
