package com.revature.p2;

import com.revature.p2.model.User;
import com.revature.p2.service.ItemService;
import com.revature.p2.service.OrderService;
import com.revature.p2.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ecommerce")
public class Controller {
    private final UserService userService;
    private final OrderService orderService;
    private final ItemService itemService;
    public Controller(UserService userService, OrderService orderService, ItemService itemService) {
        this.userService = userService;
        this.orderService = orderService;
        this.itemService = itemService;
    }
    @GetMapping("/user/all")
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = userService.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") int id){
        User user = userService.findUserById(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
    @PostMapping("/user/add")
    public ResponseEntity<User> addUser(@RequestBody User user){
        User newUser = userService.addUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }
    @PutMapping("/user/update")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        User newUser = userService.addUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.OK);
    }
    @DeleteMapping("/user/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") int id){
        userService.deleteUserById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
