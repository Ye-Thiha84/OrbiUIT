package com.example.server.Controller;

import com.example.server.Model.User;
import com.example.server.Repository.UserRepository;
import com.example.server.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/user-info")
public class UserRestController {
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private UserService userService;
    
    @GetMapping("/get")
    public List<User> getUsers(){
        return userService.getAllUsers();
    }
}
