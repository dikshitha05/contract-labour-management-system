package com.project.backend.service;

import com.project.backend.model.Employee;
import com.project.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.backend.dto.EmployeeDTO;
import com.project.backend.exception.EmployeeNotFoundException;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    // Get all employees
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // Save employee
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }
    // Get employee by ID
    public Employee getEmployeeById(Long id) {

        return employeeRepository.findById(id)
                .orElseThrow(() ->
                        new EmployeeNotFoundException("Employee not found with ID: " + id));
    }

    // Delete employee
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }

    // Update employee
    public Employee updateEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    // Convert Employee to EmployeeDTO
    public EmployeeDTO convertToDTO(Employee employee) {

        return new EmployeeDTO(
                employee.getId(),
                employee.getEmployeeName(),
                employee.getDepartment(),
                employee.getContractor(),
                employee.getStatus()
        );
    }
}