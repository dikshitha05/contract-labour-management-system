import {
  FaTachometerAlt,
  FaUsers,
  FaPlusCircle,
  FaEdit,
  FaFingerprint,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { FaUserCog } from "react-icons/fa";

function Sidebar() {

  const role =
    localStorage.getItem("role");
  
      console.log("ROLE =", role);

  return (

    <div className="sidebar">

      <h2>CLMS</h2>

      <ul>

        <li>
          <Link to="/dashboard">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </Link>
        </li>

        <li>
          <Link to="/contracts">
            <FaUsers />
            <span>Contracts</span>
          </Link>
        </li>

        {/* ADMIN ONLY */}

        {
          role === "ADMIN" && (

            <li>
              <Link to="/add-contract">
                <FaPlusCircle />
                <span>Add Contract</span>
              </Link>
            </li>

          )
        }

        {
          role === "ADMIN" && (

            <li>
              <Link to="/contracts">
                <FaEdit />
                <span>Edit Contract</span>
              </Link>
            </li>

          )
        }

        <li>
          <Link to="/biometric">
            <FaFingerprint />
            <span>Biometric ID</span>
          </Link>
        </li>

        {
          role === "ADMIN" && (

            <li>
              <Link to="/create-user">
                <FaUserCog />
                <span>Create User</span>
              </Link>
            </li>

          )
        }

      </ul>

          

      <div className="sidebar-footer">

        <p>
          CLMS v1.0
        </p>

        <small>
          Developed for BHEL
        </small>

      </div>

    </div>

  );
}

export default Sidebar;