import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Contracts() {
  const [search, setSearch] = useState("");

  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const storedContracts =
      JSON.parse(localStorage.getItem("contracts")) || [];

    setContracts(storedContracts);
  }, []);

  const filteredContracts = contracts.filter((contract) =>
    contract.employeeName
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    const updatedContracts = contracts.filter(
      (contract) => contract.id !== id
    );

    setContracts(updatedContracts);

    localStorage.setItem(
      "contracts",
      JSON.stringify(updatedContracts)
    );
  };

  return (
    <div>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "20px", width: "100%" }}>
          <h2>Contracts Management</h2>

          <input
            type="text"
            placeholder="Search contracts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "10px",
              width: "300px",
              marginBottom: "20px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />

          <table
            border="1"
            cellPadding="10"
            cellSpacing="0"
            width="100%"
            style={{
              borderCollapse: "collapse",
            }}
          >
            <thead
              style={{
                backgroundColor: "#1976d2",
                color: "white",
              }}
            >
              <tr>
                <th>ID</th>
                <th>Employee Name</th>
                <th>Department</th>
                <th>Contractor</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredContracts.map((contract) => (
                <tr key={contract.id}>
                  <td>{contract.id}</td>
                  <td>{contract.employeeName}</td>
                  <td>{contract.department}</td>
                  <td>{contract.contractor}</td>

                  <td>
                    <button
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        border: "none",
                        padding: "8px 12px",
                        marginRight: "10px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(contract.id)}
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {contracts.length === 0 && (
            <p style={{ marginTop: "20px" }}>
              No contracts available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contracts;