function SummaryCards() {
  return (

    <div className="cards-container">

      <div
        className="card"
        style={{
          background: "linear-gradient(to right, #2563eb, #3b82f6)",
          color: "white",
        }}
      >
        <h2>Total Contracts</h2>
        <h1>120</h1>
      </div>

      <div
        className="card"
        style={{
          background: "linear-gradient(to right, #16a34a, #22c55e)",
          color: "white",
        }}
      >
        <h2>Active Contracts</h2>
        <h1>95</h1>
      </div>

      <div
        className="card"
        style={{
          background: "linear-gradient(to right, #ea580c, #f97316)",
          color: "white",
        }}
      >
        <h2>Departments</h2>
        <h1>8</h1>
      </div>

    </div>
  );
}

export default SummaryCards;