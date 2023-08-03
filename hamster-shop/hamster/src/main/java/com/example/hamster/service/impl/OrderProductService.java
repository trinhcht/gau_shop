package com.example.hamster.service.impl;

import com.example.hamster.model.OrderProduct;
import com.example.hamster.repository.IOrderProductRepository;
import com.example.hamster.service.IOrderProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderProductService implements IOrderProductService {
    @Autowired
    IOrderProductRepository iOrderProductRepository;

    @Override
    public OrderProduct save(OrderProduct orderProduct) {
        return iOrderProductRepository.save(orderProduct);
    }
}
