package com.revature.p2.repo;

import com.revature.p2.model.Order;

import com.revature.p2.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepo extends JpaRepository<Order, Integer> {
    Optional<Order> findOrderById(int id);
    Optional<List<Order>> findOrdersByUser(User user);
    void deleteOrderById(int id);
}
