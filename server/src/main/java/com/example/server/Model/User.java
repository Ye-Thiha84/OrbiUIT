package com.example.server.Model;

import jakarta.persistence.*;

<<<<<<< HEAD
@Entity
@Table(name = "uitusers")
public class User {

    @Id // This annotation marks 'id' as the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // This makes the ID auto-increment
    private int id;
    private String name;
    private String studentId;
    private String email;
    private String password;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
=======
import java.time.LocalDateTime;

@Entity
@Table(name = "uituser")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    private String username;

    @Column(nullable = false, unique = true, length = 100)
    private String email;

//    @Column(nullable = false)
//    private String password;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
>>>>>>> c74acc87be48d1466b3f2b36bad2b0074eac38cf
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

<<<<<<< HEAD
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
=======
//    public String getPassword() {
//        return password;
//    }
//
//    public void setPassword(String password) {
//        this.password = password;
//    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    private LocalDateTime createdAt = LocalDateTime.now();
>>>>>>> c74acc87be48d1466b3f2b36bad2b0074eac38cf
}
