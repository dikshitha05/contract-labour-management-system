INSERT INTO employees
(id, employee_name, wo_number, contractor,
 department, effective_from, effective_to,
 biometric_id, shift, status)
VALUES
    (
        EMP_SEQ.NEXTVAL,
        'Ramesh Kumar',
        'WO101',
        'ABC Contractors',
        'Mechanical',
        '2026-01-10',
        '2026-12-31',
        'BIO101',
        'Morning',
        'Active'
    );

INSERT INTO employees
(id, employee_name, wo_number, contractor,
 department, effective_from, effective_to,
 biometric_id, shift, status)
VALUES
    (
        EMP_SEQ.NEXTVAL,
        'Suresh Naik',
        'WO102',
        'XYZ Infra',
        'Electrical',
        '2026-02-15',
        '2026-11-30',
        'BIO102',
        'Evening',
        'Active'
    );

INSERT INTO employees
(id, employee_name, wo_number, contractor,
 department, effective_from, effective_to,
 biometric_id, shift, status)
VALUES
    (
        EMP_SEQ.NEXTVAL,
        'Anil Kumar',
        'WO103',
        'Delta Services',
        'Civil',
        '2026-03-01',
        '2026-10-20',
        'BIO103',
        'Night',
        'Inactive'
    );

INSERT INTO employees
(id, employee_name, wo_number, contractor,
 department, effective_from, effective_to,
 biometric_id, shift, status)
VALUES
    (
        EMP_SEQ.NEXTVAL,
        'Vijay Sharma',
        'WO104',
        'TechBuild Pvt Ltd',
        'Production',
        '2026-04-05',
        '2026-09-15',
        'BIO104',
        'Morning',
        'Active'
    );

INSERT INTO employees
(id, employee_name, wo_number, contractor,
 department, effective_from, effective_to,
 biometric_id, shift, status)
VALUES
    (
        EMP_SEQ.NEXTVAL,
        'Mahesh Rao',
        'WO105',
        'Prime Engineering',
        'Maintenance',
        '2026-05-12',
        '2026-08-25',
        'BIO105',
        'Evening',
        'Active'
    );

INSERT INTO users
(id, username, password, role)
VALUES
    (
        USERS_SEQ.NEXTVAL,
        'dikshitha',
        '1234',
        'ADMIN'
    );