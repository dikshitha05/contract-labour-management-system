import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "20px" }}>
          <h2>Dashboard</h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                backgroundColor: "#1976d2",
                color: "white",
                padding: "20px",
                borderRadius: "10px",
                width: "200px",
              }}
            >
              <h3>Total Contracts</h3>
              <p>120</p>
            </div>

            <div
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "20px",
                borderRadius: "10px",
                width: "200px",
              }}
            >
              <h3>Active Contracts</h3>
              <p>90</p>
            </div>

            <div
              style={{
                backgroundColor: "orange",
                color: "white",
                padding: "20px",
                borderRadius: "10px",
                width: "200px",
              }}
            >
              <h3>Departments</h3>
              <p>12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;