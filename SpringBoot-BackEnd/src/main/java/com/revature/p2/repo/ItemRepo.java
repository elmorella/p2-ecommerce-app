package com.revature.p2.repo;

import com.revature.p2.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ItemRepo extends JpaRepository<Item, Integer> {
    Optional<Item> findItemById(int id);
    Optional<Item> findItemByName(String name);
    void deleteItemById(int id);
}
