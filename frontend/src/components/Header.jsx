import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] =
    useState(false);

  const username =
    localStorage.getItem(
      "username"
    );

  const handleLogout = () => {

    localStorage.clear();

    navigate("/");

  };

  return (

    <div className="top-header">

      <div>

        <h1>
          Contract Labour
          Management Dashboard
        </h1>

        <p>
          Bharat Heavy
          Electricals Limited
          (BHEL)
        </p>

      </div>

      {/* PROFILE */}

      <div
        className="profile-wrapper"
      >

        <div
          className="profile-card"

          onClick={() =>
            setShowMenu(
              !showMenu
            )
          }
        >

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
          />

          <div>

            <h3>
              {username}
            </h3>

            <p>
              {
                localStorage.getItem("role")
                  === "ADMIN"
                  ? "Administrator"
                  : "Employee"
              }
            </p>

          </div>

        </div>

        {/* DROPDOWN */}

        {showMenu && (

          <div className="profile-menu">

            <button
              onClick={() =>
                navigate("/profile")
              }
            >
              My Profile
            </button>

            <button
              onClick={
                handleLogout
              }
            >
              Logout
            </button>

          </div>

        )}

      </div>

    </div>
  );
}

export default Header;