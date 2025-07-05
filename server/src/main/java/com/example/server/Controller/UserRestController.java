package com.example.server.Controller;

<<<<<<< HEAD
import com.example.server.Service.UserService;
import com.example.server.dto.UserDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class UserRestController {
    
    private final UserService userService;
    
    public UserRestController(UserService userService) {
        this.userService = userService;
    }
    
    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody UserDTO userDTO) {
        String result = userService.registerUser(userDTO);

        if (result.equals("Signup successful")) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.badRequest().body(result);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserDTO userDTO) {
        boolean result = userService.loginUser(userDTO);

        if (result) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }


    @GetMapping("/signup")
    public ResponseEntity<String> signupGet() {
        return ResponseEntity.status(HttpStatus.METHOD_NOT_ALLOWED)
                .body("GET method not allowed. Please use POST.");
    }

=======
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
>>>>>>> c74acc87be48d1466b3f2b36bad2b0074eac38cf
}
