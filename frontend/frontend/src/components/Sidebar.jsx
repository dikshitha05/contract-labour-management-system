import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        backgroundColor: "#f0f0f0",
        padding: "20px",
      }}
    >
      <h3>Menu</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "20px" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#1976d2",
              fontWeight: "bold",
            }}
          >
            Dashboard
          </Link>
        </li>

        <li style={{ marginBottom: "20px" }}>
          <Link
            to="/contracts"
            style={{
              textDecoration: "none",
              color: "#1976d2",
              fontWeight: "bold",
            }}
          >
            Contracts
          </Link>
        </li>

        <li>
          <Link
            to="/add-contract"
            style={{
              textDecoration: "none",
              color: "#1976d2",
              fontWeight: "bold",
            }}
          >
            Add Contract
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;