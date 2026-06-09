import Sidebar from "../components/Sidebar";
import ContractTable from "../components/ContractTable";
import Header from "../components/Header";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Contracts() {

  const location = useLocation();

  const queryParams =
    new URLSearchParams(
      location.search
    );

  const filter =
    queryParams.get("filter");

  const [search, setSearch] =
    useState("");
  

  

  return (

    <div className="layout">

      <Sidebar />

      <div className="main-content">
        <Header />
        <h1 className="dashboard-title">

          {
            filter === "expiring"
              ? "Expiring Contracts"
              : "Contract Employees"
          }

        </h1>

        <div
          style={{
            marginTop: "30px",
            marginBottom: "20px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
          }}
        >

          <input
            type="text"
            placeholder="Search by Employee / Contractor"
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            style={{
              width: "250px",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #cbd5e1",
            }}
          />

        </div>

        <ContractTable
          search={search}
          filter={filter}
        />

      </div>

    </div>
  );
}

export default Contracts;