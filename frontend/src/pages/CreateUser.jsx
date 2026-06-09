import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";

function CreateUser() {

    const [username, setUsername] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [role, setRole] =
        useState("EMPLOYEE");

    const [confirmPassword,
        setConfirmPassword] =
            useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        if (!username.trim()) {
            alert(
                "Please enter a username"
            );
            return;
        }

        if (!password.trim()) {
            alert(
                "Please enter a password"
            );
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

      await axios.post(
        "http://localhost:8080/api/users",
        {
          username,
          password,
          role
        }
      );

      alert(
        "User Created Successfully"
      );

      setUsername("");
      setPassword("");
      setRole("EMPLOYEE");
      setConfirmPassword("");

    } catch (error) {

      console.log(error);

      alert(
        "Failed To Create User"
      );

    }

  };

  return (

    <div className="layout">

      <Sidebar />

      <div className="main-content">

        <Header />

        <h1 className="dashboard-title">
          Create User Account
        </h1>

        <form
          className="form-container"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(
                e.target.value
              )
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
          />
    

          <select
            value={role}
            onChange={(e) =>
              setRole(
                e.target.value
              )
            }
          >

            <option value="EMPLOYEE">
              Employee
            </option>

            <option value="ADMIN">
              Admin
            </option>

          </select>

          <button
            type="submit"
            className="submit-btn"
          >
            Create User
          </button>

        </form>

      </div>

    </div>
  );
}

export default CreateUser;