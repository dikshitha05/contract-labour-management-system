import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function AddContract() {
  const [formData, setFormData] = useState({
    employeeName: "",
    department: "",
    contractor: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingContracts =
      JSON.parse(localStorage.getItem("contracts")) || [];

    const newContract = {
      id: Date.now(),
      ...formData,
    };

    const updatedContracts = [
      ...existingContracts,
      newContract,
    ];

    localStorage.setItem(
      "contracts",
      JSON.stringify(updatedContracts)
    );

    alert("Contract Added Successfully");

    setFormData({
      employeeName: "",
      department: "",
      contractor: "",
    });
  };

  return (
    <div>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "20px", width: "100%" }}>
          <h2>Add Contract</h2>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "400px",
              backgroundColor: "#f9f9f9",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            }}
          >
            <input
              type="text"
              name="employeeName"
              placeholder="Employee Name"
              value={formData.employeeName}
              onChange={handleChange}
              required
              style={{
                padding: "12px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />

            <input
              type="text"
              name="department"
              placeholder="Department"
              value={formData.department}
              onChange={handleChange}
              required
              style={{
                padding: "12px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />

            <input
              type="text"
              name="contractor"
              placeholder="Contractor Name"
              value={formData.contractor}
              onChange={handleChange}
              required
              style={{
                padding: "12px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />

            <button
              type="submit"
              style={{
                backgroundColor: "#1976d2",
                color: "white",
                border: "none",
                padding: "12px",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Add Contract
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddContract;