function RecentContracts() {

  const recentData = [

    {
      id: 101,
      name: "Ravi Kumar",
      contractor: "ABC Pvt Ltd",
      status: "Active",
    },

    {
      id: 102,
      name: "Suresh",
      contractor: "XYZ Pvt Ltd",
      status: "Inactive",
    },

    {
      id: 103,
      name: "Naresh",
      contractor: "Delta Pvt Ltd",
      status: "Active",
    },

  ];

  return (

    <div className="recent-contracts">

      <h2>
        Recent Contracts
      </h2>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Contractor</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>

          {recentData.map((item) => (

            <tr key={item.id}>

              <td>{item.id}</td>

              <td>{item.name}</td>

              <td>{item.contractor}</td>

              <td>

                <span
                  style={{
                    backgroundColor:
                      item.status === "Active"
                        ? "#16a34a"
                        : "#dc2626",

                    color: "white",

                    padding: "6px 12px",

                    borderRadius: "20px",

                    fontSize: "13px",
                  }}
                >
                  {item.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default RecentContracts;