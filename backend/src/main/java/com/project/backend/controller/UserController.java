package com.project.backend.controller;

import com.project.backend.model.User;
import com.project.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public String createUser(
            @RequestBody User user
    ) {

        userRepository.save(user);

        return "User Created Successfully";
    }
}
