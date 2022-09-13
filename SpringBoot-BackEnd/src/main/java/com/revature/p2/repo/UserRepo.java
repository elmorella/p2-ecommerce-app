package com.revature.p2.repo;

import com.revature.p2.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserRepo extends JpaRepository<User, Integer> {

    void deleteUserById(int id);
    Optional<User> findUserById(int id);
    Optional<User> findUserByEmail(String email);
    Optional<User> findUserByUsername(String username);

}
