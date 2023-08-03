package com.example.hamster.service.impl;

import com.example.hamster.model.OrderDetail;
import com.example.hamster.repository.IOrderDetailRepository;
import com.example.hamster.service.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderDetailService implements IOrderDetailService {
    @Autowired
    IOrderDetailRepository iOrderDetailRepository;
    @Override
    public void save(OrderDetail orderDetail) {
        iOrderDetailRepository.save(orderDetail);
    }
}
