import {
  useState,
  useEffect
} from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import axios from "axios";

function AddContract() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    employeeName: "",
    woNumber: "",
    contractor: "",
    department: "",
    biometricId: "",
    effectiveFrom: "",
    effectiveTo: "",
    shift: "Morning",
    status: "Active",

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value,

    });

  };

  useEffect(() => {

    const role =
      localStorage.getItem(
        "role"
      );

    if (
      role !== "ADMIN"
    ) {

      navigate(
        "/dashboard"
      );

    }

  }, []);

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8080/api/contracts",
        formData
      );

      alert(
        "Contract Added Successfully"
      );

      navigate("/contracts");

    }

    catch (error) {

      console.log("FULL ERROR:", error);
      console.log("STATUS:", error.response?.status);
      console.log("DATA:", error.response?.data);

      alert(
        JSON.stringify(
          error.response?.data
        )
      );

    }

  };

  return (

    <div className="layout">

      <Sidebar />

      <div className="main-content">

        <Header />

        <h1 className="dashboard-title">
          Add Contract Employee
        </h1>

        <form
          className="form-container"
          onSubmit={handleSubmit}
        >

          {/* Employee Name */}

          <input
            type="text"
            name="employeeName"
            placeholder="Employee Name"
            value={formData.employeeName}
            onChange={handleChange}
            required
          />

          {/* WO Number */}

          <select
            name="woNumber"
            value={formData.woNumber}
            onChange={handleChange}
            required
          >

            <option value="">
              Select WO Number
            </option>

            <option value="WO101">
              WO101
            </option>

            <option value="WO102">
              WO102
            </option>

            <option value="WO103">
              WO103
            </option>

            <option value="WO104">
             WO104
            </option>

            <option value="WO105">
              WO105
            </option>

          </select>

          {/* Contractor Dropdown */}

          <select
            name="contractor"
            value={formData.contractor}
            onChange={handleChange}
            required
          >

            <option value="">
              Select Contractor
            </option>

            <option value="ABC Contractors">
              ABC Contractors
            </option>

            <option value="XYZ Infra">
              XYZ Infra
            </option>

            <option value="Delta Services">
              Delta Services
            </option>

            <option value="TechBuild Pvt Ltd">
              TechBuild Pvt Ltd
            </option>

            <option value="Prime Engineering">
              Prime Engineering
            </option>

          </select>

          {/* Department Dropdown */}

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >

            <option value="">
              Select Department
            </option>

            <option value="Mechanical">
              Mechanical
            </option>

            <option value="Electrical">
              Electrical
            </option>

            <option value="Civil">
              Civil
            </option>

            <option value="Production">
              Production
            </option>

            <option value="Maintenance">
              Maintenance
            </option>

          </select>

          {/* Biometric ID */}

          <select
            name="biometricId"
            value={formData.biometricId}
            onChange={handleChange}
            required
          >

            <option value="">
              Select Biometric ID
            </option>

            <option value="BIO101">
              BIO101
            </option>

            <option value="BIO102">
              BIO102
            </option>

            <option value="BIO103">
             BIO103
            </option>

            <option value="BIO104">
              BIO104
            </option>

            <option value="BIO105">
              BIO105
            </option>

          </select>

          {/* Effective From */}

          <label>
            Effective From Date
          </label>

          <input
            type="date"
            name="effectiveFrom"
            value={formData.effectiveFrom}
            onChange={handleChange}
            required
          />

          {/* Effective To */}

          <label>
            Effective To Date
          </label>

          <input
            type="date"
            name="effectiveTo"
            value={formData.effectiveTo}
            onChange={handleChange}
            required
          />

          {/* Shift Dropdown */}

          <select
            name="shift"
            value={formData.shift}
            onChange={handleChange}
          >

            <option value="Morning">
              Morning
            </option>

            <option value="Evening">
              Evening
            </option>

            <option value="Night">
              Night
            </option>

          </select>

          {/* Status Dropdown */}

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >

            <option value="Active">
              Active
            </option>

            <option value="Inactive">
              Inactive
            </option>

          </select>

          <button
            type="submit"
            className="submit-btn"
          >

            Add Contract

          </button>

        </form>

      </div>

    </div>

  );
}

export default AddContract;