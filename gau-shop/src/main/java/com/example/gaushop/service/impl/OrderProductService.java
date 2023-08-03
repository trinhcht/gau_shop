package com.example.gaushop.service.impl;

import com.example.gaushop.model.OrderProduct;
import com.example.gaushop.repository.IOrderProductRepository;
import com.example.gaushop.service.IOrderProductService;
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
