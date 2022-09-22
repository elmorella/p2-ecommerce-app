package com.revature.p2.repo;

import com.revature.p2.model.Item;
import com.revature.p2.model.OrderReceipt;

import com.revature.p2.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepo extends JpaRepository<OrderReceipt, Integer> {

    Optional<OrderReceipt> findOrderById(int id);
    Optional<List<OrderReceipt>> findOrdersByUserId(int userId);
    void deleteOrderById(int id);
}
