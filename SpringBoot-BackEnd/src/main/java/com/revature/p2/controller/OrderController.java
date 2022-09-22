package com.revature.p2.controller;

import com.revature.p2.model.OrderReceipt;
import com.revature.p2.model.User;
import com.revature.p2.service.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {
    private final OrderService orderService;
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<OrderReceipt>> getAllUsers(){
        List<OrderReceipt> orderReceipts = orderService.findAllOrders();
        return new ResponseEntity<>(orderReceipts, HttpStatus.OK);
    }
    @GetMapping("/all/{id}")
    public ResponseEntity<List<OrderReceipt>> getOrdersByUserId(@PathVariable("id") int id){
        List<OrderReceipt> orderReceipts = orderService.findOrdersByUserId(id);
        return new ResponseEntity<>(orderReceipts, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<OrderReceipt> getOrderById(@PathVariable("id") int id){
        OrderReceipt orderReceipt = orderService.findOrderById(id);
        return new ResponseEntity<>(orderReceipt, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<OrderReceipt> addOrder(@RequestBody OrderReceipt orderReceipt){
        OrderReceipt newOrderReceipt = orderService.addOrder(orderReceipt);
        return new ResponseEntity<>(newOrderReceipt, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<OrderReceipt> updateOrder(@RequestBody OrderReceipt orderReceipt){
        OrderReceipt updatedOrderReceipt = orderService.updateOrder(orderReceipt);
        return new ResponseEntity<>(updatedOrderReceipt, HttpStatus.OK);
    }
    @DeleteMapping("delete/{id}")
    public ResponseEntity<?> deleteOrder(@PathVariable("id") int id){
        orderService.deleteOrderById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
