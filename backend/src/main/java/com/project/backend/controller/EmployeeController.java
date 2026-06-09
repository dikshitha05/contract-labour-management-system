package com.project.backend.controller;

import com.project.backend.model.Employee;
import com.project.backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.project.backend.dto.EmployeeDTO;

import java.util.List;

@RestController
@RequestMapping("/api/contracts")
@CrossOrigin("*")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    // Get all employees
    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    // Add employee
    @PostMapping
    public String addEmployee(@RequestBody Employee employee) {

        employeeService.saveEmployee(employee);

        return "Contract added successfully";
    }

    // Get employee by ID
    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable Long id) {
        return employeeService.getEmployeeById(id);
    }

    // Delete employee
    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
        return "Contract deleted successfully";
    }

    // Update employee
    @PutMapping("/{id}")
    public String updateEmployee(@PathVariable Long id,
                                 @RequestBody Employee employee) {

        employee.setId(id);

        employeeService.updateEmployee(employee);

        return "Contract updated successfully";
    }

    // Get employee DTO by ID
    @GetMapping("/dto/{id}")
    public EmployeeDTO getEmployeeDTO(@PathVariable Long id) {

        Employee employee = employeeService.getEmployeeById(id);

        return employeeService.convertToDTO(employee);
    }
}