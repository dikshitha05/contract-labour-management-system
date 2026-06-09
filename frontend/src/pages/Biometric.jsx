import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";


function Biometric() {

    const [biometricId, setBiometricId] =
        useState("");

    const [attendance, setAttendance] =
        useState([]);
    
    const [biometricIds, setBiometricIds] =
        useState([]);
    
    const [contracts, setContracts] =
        useState([]);

    const [fromDate, setFromDate] = 
        useState("");

    const [toDate, setToDate] = 
        useState("");



  const fetchAttendance =
    async (id) => {

      setBiometricId(id);

      try {

        const response =
          await axios.get(
            `http://localhost:8080/api/biometric/${id}`
          );

        setAttendance(
          response.data
        );

      }

      catch(error) {

        console.log(error);

      }

    };

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/contracts")
            .then((response) => {
                const ids =
                [...new Set(
                    response.data.map(
                        (item) =>
                            item.biometricId
                    )
                )];
                setBiometricIds(ids);
                setContracts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const filteredAttendance =
        attendance.filter((item) => {

            const currentDate =
                new Date(item.attDate);

            if (
                fromDate &&
                currentDate < new Date(fromDate)
            ) {
                return false;
            }

            if (
                toDate &&
                currentDate > new Date(toDate)
            ) {
                return false;
            }

            return true;
        });

    const selectedEmployee =
        contracts.find(
            (item) =>
                item.biometricId === biometricId
            );

  return (

    <div className="layout">

      <Sidebar />

      <div className="main-content">

        <Header />

        <h1 className="dashboard-title">
          Biometric ID Management
        </h1>

        <div
            style={{
                textAlign: "center",
                marginBottom: "15px"
            }}
        >

            <select
                value={biometricId}
                onChange={(e) =>
                    fetchAttendance(
                        e.target.value
                    )
                }
                style={{
                    width: "220px",
                    padding: "8px",
                    borderRadius: "8px"
                }}
            >

                <option value="">
                    Select Biometric ID
                </option>

                {biometricIds.map((id) => (
                    <option
                        key={id}
                        value={id}
                    >
                        {id}
                    </option>
                ))}

            </select>

        </div>

        <div
            style={{
                display: "flex",
                gap: "15px",
                marginBottom: "20px",
                justifyContent: "center",
                alignItems: "center"
            }}
        >

            

        </div>

        {biometricId && (

            <div
                style={{
                    background: "white",
                    padding: "6px 12px",
                    borderRadius: "12px",
                    marginBottom: "8px",
                    lineHeight: "1.2"
                }}
            >

            

                <p>
                    <strong>Employee:</strong> {selectedEmployee?.employeeName}
                </p>

                <p>
                    <strong>Bio ID:</strong> {biometricId}
                </p>

                <p>
                    <strong>Dept:</strong> {selectedEmployee?.department}
                </p>

                <p>
                    <strong>Status:</strong>{" "}
                    <span
                        style={{
                            color: "green",
                            fontWeight: "bold"
                        }}
                    >
                        {selectedEmployee?.status}
                    </span>
                </p>

            </div>

        )}

        <div className="table-container">

          <table
            className="employee-table"
          >

            <thead>

              <tr>

                <th>Date</th>

                <th>Day</th>

                <th>Swipe(s)</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

                {filteredAttendance.length === 0 ? (

                    <tr>

                        <td
                            colSpan="4"
                            style={{
                                textAlign: "center",
                                padding: "20px",
                                fontWeight: "bold"
                            }}
                        >
                            No attendance records found
                        </td>

                    </tr>

                ) : (

                    filteredAttendance.map((item) => (

                        <tr key={item.id}>

                            <td>
                                {new Date(item.attDate)
                                    .toLocaleDateString()}
                            </td>

                            <td>{item.dayName}</td>

                            <td>{item.swipes}</td>

                            <td
                                style={{
                                    color:
                                        item.status === "P"
                                            ? "green"
                                            : "red",
                                        fontWeight: "bold"
                                }}
                            >
                                {item.status}
                            </td>

                        </tr>

                    ))

                )}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );
}

export default Biometric;