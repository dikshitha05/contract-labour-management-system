import { useNavigate }
from "react-router-dom";

import { useState }
from "react";

import axios
from "axios";

import {
  FaUserShield,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

function Login() {

  const navigate =
    useNavigate();

  const [username,
    setUsername] =
      useState("");

  const [password,
    setPassword] =
      useState("");

  const [role,
    setRole] =
      useState("EMPLOYEE");

  const [showPassword,
    setShowPassword] =
      useState(false);

  const [loading,
    setLoading] =
      useState(false);

  const handleLogin =
    async () => {

      setLoading(true);

      try {

        const response =
          await axios.post(

            "http://localhost:8080/api/auth/login",

            {
              username,
              password
            }

          );

        if (
          response.data ===
          "ADMIN" ||
          response.data ===
          "EMPLOYEE"
        ){

          if (
            response.data !== role
          ) {

            alert(
              "Selected role does not match account role"
            );

            setLoading(false);

            return;

          }
        
          localStorage.setItem(
            "username",
            username
          );

          localStorage.setItem(
            "role",
            response.data
          );


          navigate(
            "/dashboard"
          );

          setLoading(false);

        }

        else {

          setLoading(false);

          alert(
            "Invalid Username or Password"
          );

        }

      }

      catch(error){

        setLoading(false);

        console.log(error);

        alert(
          "Login Failed"
        );

      }

    };

  return (

    <div className="login-page">

      <div className="login-left">

        <h1>

          Contract Labour
          Management System

        </h1>

        <p>

          BHEL Employee &
          Contractor Management Portal

        </p>

      </div>

      <div className="login-right">

        <div className="login-box">

          <h2>
            Login
          </h2>

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

          <div className="password-wrapper">

            <input

              type={
                showPassword
                  ? "text"
                  : "password"
              }

              placeholder="Password"

              value={password}

              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }

            />

            <span
              className="eye-icon"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
            >

              {
                showPassword
                  ? <FaEyeSlash />
                  : <FaEye />
              }

            </span>

          </div>

          <div className="role-select-wrapper">

            <FaUserShield className="role-icon" />

            <select
              className="login-select"
              value={role}
              onChange={(e) =>
                setRole(
                  e.target.value
                )
              }
            >

              <option value="ADMIN">
                👨‍💼 Admin
              </option>

              <option value="EMPLOYEE">
              👨‍🔧 Employee
              </option>

            </select>

          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
          >

            {loading ? "Logging in..." : "Login"}

          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;