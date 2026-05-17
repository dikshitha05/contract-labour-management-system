package com.project.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {

    @Id
    private Long id;
    private String employeeName;
    private String woNumber;
    private String contractorName;
    private String department;
    private String effectiveFrom;
    private String effectiveTo;
    private String biometricId;
    private String shift;
    private String status;

    public Employee() {
    }

    public Employee(Long id, String employeeName, String woNumber,
                    String contractorName, String department,
                    String effectiveFrom, String effectiveTo,
                    String biometricId, String shift, String status) {

        this.id = id;
        this.employeeName = employeeName;
        this.woNumber = woNumber;
        this.contractorName = contractorName;
        this.department = department;
        this.effectiveFrom = effectiveFrom;
        this.effectiveTo = effectiveTo;
        this.biometricId = biometricId;
        this.shift = shift;
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

    public String getWoNumber() {
        return woNumber;
    }

    public void setWoNumber(String woNumber) {
        this.woNumber = woNumber;
    }

    public String getContractorName() {
        return contractorName;
    }

    public void setContractorName(String contractorName) {
        this.contractorName = contractorName;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getEffectiveFrom() {
        return effectiveFrom;
    }

    public void setEffectiveFrom(String effectiveFrom) {
        this.effectiveFrom = effectiveFrom;
    }

    public String getEffectiveTo() {
        return effectiveTo;
    }

    public void setEffectiveTo(String effectiveTo) {
        this.effectiveTo = effectiveTo;
    }

    public String getBiometricId() {
        return biometricId;
    }

    public void setBiometricId(String biometricId) {
        this.biometricId = biometricId;
    }

    public String getShift() {
        return shift;
    }

    public void setShift(String shift) {
        this.shift = shift;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}