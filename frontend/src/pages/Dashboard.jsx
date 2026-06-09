import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import {
  FaFileAlt,
  FaUserPlus,
  FaUsers,
  FaClock,
  FaUserCheck,
  FaUserTimes,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

function Dashboard() {
  const navigate = useNavigate();

  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    fetchContracts();
  }, []);

  const fetchContracts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/contracts"
      );

      setContracts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  /* ANALYTICS */

  const totalEmployees = contracts.length;

  const activeEmployees = contracts.filter(
    (c) => c.status === "Active"
  ).length;

  const inactiveEmployees = contracts.filter(
    (c) => c.status === "Inactive"
  ).length;

  const today = new Date();

  const expiringContracts = contracts.filter(
    (c) => {
      const endDate = new Date(c.effectiveTo);

      const diffDays =
        (endDate - today) /
        (1000 * 60 * 60 * 24);

      return diffDays >= 0 && diffDays <= 30;
    }
  ).length;

  const expiringList = contracts
    .filter((c) => {

      const endDate =
        new Date(
          c.effectiveTo
        );

      const diffDays =
        Math.ceil(
          (endDate - today) /
          (1000 * 60 * 60 * 24)
        );

      return (
        diffDays >= 0 &&
        diffDays <= 30
      );

    })
    .map((c) => ({

      ...c,

      daysLeft:
        Math.ceil(
          (
            new Date(
              c.effectiveTo
            ) - today
          ) /
          (1000 * 60 * 60 * 24)
        ),

    }));

  const hasExpiringContracts =
    expiringContracts > 0;

  /* DEPARTMENT BAR CHART */

  const departmentData = Object.entries(
    contracts.reduce((acc, contract) => {
      acc[contract.department] =
        (acc[contract.department] || 0) + 1;

      return acc;
    }, {})
  ).map(([department, count]) => ({
    department,
    count,
  }));

  /* SHIFT PIE CHART */

  const shiftData = [
    {
      name: "Morning",
      value: contracts.filter(
        (c) => c.shift === "Morning"
      ).length,
    },

    {
      name: "Evening",
      value: contracts.filter(
        (c) => c.shift === "Evening"
      ).length,
    },

    {
      name: "Night",
      value: contracts.filter(
        (c) => c.shift === "Night"
      ).length,
    },
  ];

  const COLORS = [
    "#2563eb",
    "#16a34a",
    "#ea580c",
  ];

  return (
    <div className="layout">

      <Sidebar />

      <div className="main-content">

        <Header />

        <h1 className="dashboard-title">
          Contract Labour Management System
        </h1>

        <div className="welcome-card">

          <h2>
            👋 Welcome {
              localStorage.getItem(
                "username"
              )
            }
          </h2>

          <p>
            Role :
            {
              localStorage.getItem(
                "role"
              )
            }
          </p>

          <p>
            Date :
            {
              new Date()
                .toLocaleDateString()
            }
          </p>

          <p>
            Welcome to Contract Labour
            Management System.
            Manage contracts, employees
            and biometric records
            efficiently.
          </p>

        </div>

        {
          hasExpiringContracts && (

            <div className="alert-banner">

              ⚠️ {expiringContracts}
              contract(s) are expiring
              within 30 days

            </div>

          )
        }

        {/* ANALYTICS CARDS */}

        <div className="stats-grid">

          <div className="stat-card blue">

            <FaUsers
              size={34}
              style={{
                marginBottom: "12px",
              }}
            />

            <h3>Total Employees</h3>

            <h1>{totalEmployees}</h1>

            <p className="card-subtitle">
              Live Database Count
            </p>

          </div>

          <div
            className="stat-card green"
            onClick={() =>
              navigate(
                "/contracts?filter=active"
              )
            }
          >
            <FaUserCheck className="card-icon" />
            <h3>Active Employees</h3>
            <h1>{activeEmployees}</h1>
            <p className="card-subtitle">
              Currently Working
            </p>
          </div>

          <div
            className="stat-card orange"
            onClick={() =>
              navigate(
                "/contracts?filter=inactive"
              )
            }
          >
            <FaUserTimes className="card-icon" />

            <h3>Inactive Employees</h3>
            <h1>{inactiveEmployees}</h1>
            <p className="card-subtitle">
              Not Currently Working
            </p>
          </div>

          <div
            className="stat-card red"
            onClick={() =>
              navigate(
                "/contracts?filter=expiring"
              )
            }
          >
            <FaClock className="card-icon" />
            <h3>Expiring Contracts</h3>
            <h1>{expiringContracts}</h1>
            <p className="card-subtitle">
              Expiring within 30 days
            </p>
          </div>

        </div>


        {/* DEPARTMENT BAR CHART */}

        <div
          className="table-container"
          style={{
            marginTop: "30px",
            padding: "20px",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
              color: "#071739",
            }}
          >
            Department Wise Employees
          </h2>

          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <BarChart data={departmentData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="department" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="count"
                fill="#2563eb"
              />

            </BarChart>
          </ResponsiveContainer>

        </div>

        <div className="alert-card">

          <h2>
            ⚠️ Contracts Expiring Soon
          </h2>

          {
            expiringList.length === 0
              ? (
                <p>
                  No contracts expiring
                  within 30 days
                </p>
              )
            : (
                expiringList.map(
                  (contract) => (

                    <div
                      key={contract.id}
                      className="alert-row"
                    >

                      <span>
                        {
                          contract.employeeName
                        }
                      </span>

                      <span>
                        {
                          contract.daysLeft
                        } Days left
                      </span>

                    </div>

                  )
                )
              )
          }

    </div>

        {/* SHIFT PIE CHART */}

        <div
          className="table-container"
          style={{
            marginTop: "30px",
            padding: "20px",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
              color: "#071739",
            }}
          >
            Shift Wise Employees
          </h2>

          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <PieChart>

              <Pie
                data={shiftData}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label
              >
                {shiftData.map(
                  (entry, index) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index %
                            COLORS.length
                        ]
                      }
                    />
                  )
                )}
              </Pie>

              <Tooltip />

              <Legend />

            </PieChart>
          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;