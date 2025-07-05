package com.example.server.Repository;

import com.example.server.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

<<<<<<< HEAD
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    boolean existsByEmail(String email);
    Optional<User> findByEmail(String email);
=======
public interface UserRepository extends JpaRepository<User, Integer> {
//    userModel findByEmail(String email);
>>>>>>> c74acc87be48d1466b3f2b36bad2b0074eac38cf
}
