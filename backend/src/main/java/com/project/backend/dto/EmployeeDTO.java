package com.project.backend.dto;

public class EmployeeDTO {

    private Long id;
    private String employeeName;
    private String department;
    private String contractorName;
    private String status;

    public EmployeeDTO() {
    }

    public EmployeeDTO(Long id, String employeeName,
                       String department,
                       String contractorName,
                       String status) {

        this.id = id;
        this.employeeName = employeeName;
        this.department = department;
        this.contractorName = contractorName;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getContractorName() {
        return contractorName;
    }

    public void setContractorName(String contractorName) {
        this.contractorName = contractorName;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}