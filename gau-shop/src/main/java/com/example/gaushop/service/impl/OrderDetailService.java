package com.example.gaushop.service.impl;

import com.example.gaushop.model.OrderDetail;
import com.example.gaushop.repository.IOrderDetailRepository;
import com.example.gaushop.service.IOrderDetailService;
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
