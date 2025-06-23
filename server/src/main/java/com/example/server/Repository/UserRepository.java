package com.example.server.Repository;

import com.example.server.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
//    userModel findByEmail(String email);
}
