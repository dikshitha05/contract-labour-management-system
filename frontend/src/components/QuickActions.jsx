import {
  FaUsers,
  FaPlusCircle,
  FaFileContract,
  FaClock,
} from "react-icons/fa";

function QuickActions() {

  const actions = [

    {
      title: "View Contracts",
      icon: <FaFileContract />,
      color: "#2563eb",
    },

    {
      title: "Add Employee",
      icon: <FaPlusCircle />,
      color: "#16a34a",
    },

    {
      title: "Active Employees",
      icon: <FaUsers />,
      color: "#ea580c",
    },

    {
      title: "Expiring Contracts",
      icon: <FaClock />,
      color: "#dc2626",
    },

  ];

  return (

    <div className="quick-actions">

      {actions.map((action, index) => (

        <div
          className="action-card"
          key={index}
        >

          <div
            className="action-icon"
            style={{
              backgroundColor: action.color,
            }}
          >
            {action.icon}
          </div>

          <h3>{action.title}</h3>

        </div>

      ))}

    </div>
  );
}

export default QuickActions;