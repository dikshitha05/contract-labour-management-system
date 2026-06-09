package com.project.backend.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "BIOMETRIC_ATTENDANCE")
public class BiometricAttendance {

    @Id
    private Long id;

    @Column(name = "BIOMETRIC_ID")
    private String biometricId;

    @Column(name = "ATT_DATE")
    private Date attDate;

    @Column(name = "DAY_NAME")
    private String dayName;

    @Column(name = "SWIPES")
    private String swipes;

    @Column(name = "STATUS")
    private String status;

    public BiometricAttendance() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBiometricId() {
        return biometricId;
    }

    public void setBiometricId(String biometricId) {
        this.biometricId = biometricId;
    }

    public Date getAttDate() {
        return attDate;
    }

    public void setAttDate(Date attDate) {
        this.attDate = attDate;
    }

    public String getDayName() {
        return dayName;
    }

    public void setDayName(String dayName) {
        this.dayName = dayName;
    }

    public String getSwipes() {
        return swipes;
    }

    public void setSwipes(String swipes) {
        this.swipes = swipes;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
