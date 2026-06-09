package com.project.backend.controller;

import com.project.backend.model.BiometricAttendance;
import com.project.backend.repository.BiometricAttendanceRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/biometric")
@CrossOrigin("*")
public class BiometricAttendanceController {

    @Autowired
    private BiometricAttendanceRepository repository;

    @GetMapping("/{biometricId}")
    public List<BiometricAttendance> getAttendance(
            @PathVariable String biometricId
    ) {

        return repository.findByBiometricId(
                biometricId
        );
    }
}