import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

function Biometric() {

  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [departmentFilter, setDepartmentFilter] =
    useState("All");

  const [shiftFilter, setShiftFilter] =
    useState("All");

  const [statusFilter, setStatusFilter] =
    useState("All");
  const [biometricFilter, setBiometricFilter] =
    useState("All");

  useEffect(() => {

    axios
      .get("http://localhost:8080/api/contracts")
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (

    <div className="layout">

      <Sidebar />

      <div className="main-content">

        <Header />

        <h1 className="dashboard-title">
          Biometric ID Management
        </h1>
        <input
          type="text"
          placeholder="Search by Biometric ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "300px",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #cbd5e1"
          }}
        />

        <div className="table-container">

          <table className="employee-table">

            <thead>

              <tr>

                <th>ID</th>

                <th>Employee Name</th>

                <th>
                  Biometric ID
                  <br />
                  <select
                    value={biometricFilter}
                    onChange={(e) =>
                      setBiometricFilter(e.target.value)
                    }
                  >
                    <option value="All">All</option>

                    {
                      [...new Set(
                        employees.map(
                          emp => emp.biometricId
                        )
                      )].map(id => (
                        <option
                          key={id}
                          value={id}
                        >
                          {id}
                        </option>
                      ))
                    }

                  </select>
                </th>

                <th>
                  Department
                  <br />
                  <select
                    value={departmentFilter}
                    onChange={(e) =>
                      setDepartmentFilter(
                        e.target.value
                      )
                    }
                  >
                    <option value="All">All</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Production">Production</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Data Science">Data Science</option>
                  </select>
                </th>

                <th>
                  Shift
                  <br />
                  <select
                    value={shiftFilter}
                    onChange={(e) =>
                      setShiftFilter(
                        e.target.value
                      )
                    }
                  >
                    <option value="All">All</option>
                    <option value="Morning">Morning</option>
                    <option value="Evening">Evening</option>
                    <option value="Night">Night</option>
                  </select>
                </th>

                <th>
                  Status
                  <br />
                  <select
                    value={statusFilter}
                    onChange={(e) =>
                      setStatusFilter(
                        e.target.value
                      )
                    }
                  >
                    <option value="All">All</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </th>

              </tr>

            </thead>

            <tbody>

              {employees
                .filter((emp) => {

                  const matchesSearch =

                    emp.biometricId
                      ?.toLowerCase()
                      .includes(
                        search.toLowerCase()
                      ) ||

                    emp.employeeName
                      ?.toLowerCase()
                      .includes(
                        search.toLowerCase()
                      );

                  const matchesDepartment =

                    departmentFilter === "All" ||

                    emp.department ===
                      departmentFilter;

                  const matchesShift =

                    shiftFilter === "All" ||

                    emp.shift ===
                      shiftFilter;

                  const matchesStatus =

                    statusFilter === "All" ||

                    emp.status ===
                      statusFilter;

                  const matchesBiometric =

                    biometricFilter === "All" ||

                    emp.biometricId ===
                      biometricFilter;

                  return (
                    matchesSearch &&
                    matchesDepartment &&
                    matchesShift &&
                    matchesStatus &&
                    matchesBiometric
                  );

                })

                .map((emp) => (

                  <tr key={emp.id}>

                  <td>{emp.id}</td>

                  <td>{emp.employeeName}</td>

                  <td>{emp.biometricId}</td>

                  <td>{emp.department}</td>

                  <td>{emp.shift}</td>

                  <td>

                    <span
                      className={
                        emp.status === "Active"
                          ? "status-active"
                          : "status-inactive"
                      }
                    >

                      {emp.status}

                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Biometric;