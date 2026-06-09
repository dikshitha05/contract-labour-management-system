import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import {
  useState,
  useEffect,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import axios from "axios";

function EditContract() {

  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] =
    useState(null);

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

  /* LOAD DATA */

  useEffect(() => {

    fetchEmployee();

  }, []);

  const fetchEmployee =
    async () => {

      try {

        const response =
          await axios.get(
            `http://localhost:8080/api/contracts/${id}`
          );

        setFormData(
          response.data
        );

      } catch (error) {

        console.log(error);

      }

    };

  /* INPUT CHANGE */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  /* UPDATE */

  const handleUpdate =
    async (e) => {

      e.preventDefault();

      try {

        await axios.put(

          `http://localhost:8080/api/contracts/${id}`,

          formData

        );

        alert(
          "Contract Updated Successfully"
        );

        navigate(
          "/contracts"
        );

      } catch (error) {

        console.log(error);

        alert(
          "Error updating contract"
        );

      }
    };

  /* LOADING */

  if (!formData) {

    return <h2>Loading...</h2>;

  }

  return (

    <div className="layout">

      <Sidebar />

      <div className="main-content">

        <Header />

        <h1 className="dashboard-title">
          Edit Contract Employee
        </h1>

        <form
          className="form-container"
          onSubmit={handleUpdate}
        >

          <input
            type="text"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleChange}
          />

          <select
            name="woNumber"
            value={formData.woNumber}
            onChange={handleChange}
          >

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

          <select
            name="contractor"
            value={formData.contractor}
            onChange={handleChange}
          >

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

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
          >

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

          <label>
            Effective From Date
          </label>

          <input
            type="date"
            name="effectiveFrom"
            value={formData.effectiveFrom}
            onChange={handleChange}
          />

          <label>
            Effective To Date
          </label>

          <input
            type="date"
            name="effectiveTo"
            value={formData.effectiveTo}
            onChange={handleChange}
          />

          <select
            name="biometricId"
            value={formData.biometricId}
            onChange={handleChange}
          >

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

          <select
            name="shift"
            value={formData.shift}
            onChange={handleChange}
          >

            <option>
              Morning
            </option>

            <option>
              Evening
            </option>

            <option>
              Night
            </option>

          </select>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >

            <option>
              Active
            </option>

            <option>
              Inactive
            </option>

          </select>

          <button
            type="submit"
            className="submit-btn"
          >
            Update Contract
          </button>

        </form>

      </div>

    </div>
  );
};

export default EditContract;