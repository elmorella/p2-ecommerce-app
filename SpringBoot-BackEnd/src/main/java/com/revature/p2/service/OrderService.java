package com.revature.p2.service;

import com.revature.p2.exception.OrderNotFoundException;
import com.revature.p2.model.OrderReceipt;
import com.revature.p2.model.User;
import com.revature.p2.repo.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@Transactional
public class OrderService {
    private final OrderRepo orderRepo;
    @Autowired
    public OrderService(OrderRepo orderRepo){this.orderRepo = orderRepo;}
    public OrderReceipt addOrder(OrderReceipt orderReceipt){return  orderRepo.save(orderReceipt);}
    public List<OrderReceipt> findAllOrders(){return orderRepo.findAll();}
    public OrderReceipt updateOrder(OrderReceipt orderReceipt){return orderRepo.save(orderReceipt);}
    public OrderReceipt findOrderById(int id){
        return orderRepo.findOrderById(id)
                .orElseThrow(() -> new OrderNotFoundException("Order with id:" + id + ", not found"));
    }
    public List<OrderReceipt> findOrdersByUserId(int id){
        List<OrderReceipt> checkOrders = orderRepo.findOrdersByUserId(id)
                .orElseThrow(() -> new OrderNotFoundException("No orders found"));
        System.out.println(checkOrders);
        return checkOrders;
    }
    public void deleteOrderById(int id){orderRepo.deleteOrderById(id);}
}
