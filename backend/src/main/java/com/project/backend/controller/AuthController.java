package com.project.backend.controller;

import com.project.backend.dto.LoginRequest;

import com.project.backend.model.User;

import com.project.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("/api/auth")

@CrossOrigin("*")

public class AuthController {

    @Autowired

    private UserRepository userRepository;

    @PostMapping("/login")

    public String login(
            @RequestBody LoginRequest request
    ) {

        User user =
                userRepository.findByUsername(
                        request.getUsername()
                );
        System.out.println(user);

        System.out.println(
                "Username from UI = "
                        + request.getUsername()
        );

        System.out.println(
                "Password from UI = "
                        + request.getPassword()
        );

        System.out.println(
                "DB User = "
                        + user
        );

        if(user != null){
            System.out.println(
                    "DB Password = "
                            + user.getPassword()
            );
        }

        if (user != null &&
                user.getPassword().equals(
                        request.getPassword()
                )) {

            return user.getRole();

        }

        return "Invalid Username or Password";
    }
}