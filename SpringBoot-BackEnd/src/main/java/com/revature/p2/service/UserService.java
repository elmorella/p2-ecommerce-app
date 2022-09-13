package com.revature.p2.service;

import com.revature.p2.exception.UserNotFoundException;
import com.revature.p2.model.User;
import com.revature.p2.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserService{

    private final UserRepo userRepo;

    @Autowired
    public UserService(UserRepo userRepo){this.userRepo = userRepo;}
    public User addUser(User user){return userRepo.save(user);}
    public List<User> findAllUsers(){return userRepo.findAll();}
    public User updateUser(User user){return userRepo.save(user);}
    public User validateUser(String username, String password){
        User user = findUserByUsername(username);
        if(user.getPassword().contentEquals(password)){
            return user;
        } else{
            throw new UserNotFoundException("User not found");
        }
    }
    public User findUserById(int id){
        return userRepo.findUserById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found"));
    }
    public User findUserByEmail(String email){
        return userRepo.findUserByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("User not found"));
    }
    public User findUserByUsername(String username){
        System.out.println(username);
        return userRepo.findUserByUsername(username)
                .orElseThrow(() -> new UserNotFoundException("User not found"));
    }
    public void deleteUserById(int id){userRepo.deleteUserById(id);}
}
