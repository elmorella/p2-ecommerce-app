package com.revature.p2.service;

import com.revature.p2.exception.ItemNotFoundException;
import com.revature.p2.model.Item;
import com.revature.p2.repo.ItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@Transactional
public class ItemService {
    private final ItemRepo itemRepo;
    @Autowired
    public ItemService(ItemRepo itemRepo) {this.itemRepo = itemRepo;}
    public Item addItem(Item item){return itemRepo.save(item);}
    public List<Item> findAllItems(){return  itemRepo.findAll();}
    public Item updateItem(Item item){return itemRepo.save(item);}
    public Item findItemById(int id){
        return itemRepo.findItemById(id)
                .orElseThrow(() -> new ItemNotFoundException("Item with id:" + id + ", not found"));
    }
    public Item findItemByName(String name){
        return itemRepo.findItemByName(name)
                .orElseThrow(() -> new ItemNotFoundException("Item with name:" + name + ", not found"));
    }
    public void deleteItemById(int id){
        itemRepo.deleteItemById(id);
    }
}
