package com.revature.p2.controller;

import com.revature.p2.model.Item;
import com.revature.p2.service.ItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/item")
public class ItemController {

    private final ItemService itemService;
    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Item>> getAllItems(){
        List<Item> items = itemService.findAllItems();
        return new ResponseEntity<>(items, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable("id") int id){
        Item item = itemService.findItemById(id);
        return new ResponseEntity<>(item, HttpStatus.OK);
    }
    @GetMapping("/{name}")
    public ResponseEntity<Item> getItemByName(@PathVariable("name") String name){
        Item item = itemService.findItemByName(name);
        return new ResponseEntity<>(item, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Item> addItem(@RequestBody Item item){
        Item newItem = itemService.addItem(item);
        return new ResponseEntity<>(item, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Item> updateItem(@RequestBody Item item){
        Item updatedItem = itemService.updateItem(item);
        return new ResponseEntity<>(updatedItem, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteItem(@PathVariable("id") int id){
        itemService.deleteItemById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
