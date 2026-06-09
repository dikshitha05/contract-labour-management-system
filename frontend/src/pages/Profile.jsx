import Sidebar from "../components/Sidebar";

function Profile() {

  const username =
    localStorage.getItem(
      "username"
    );

  const role =
    localStorage.getItem(
      "role"
    );

  return (

    <div className="layout">

      <Sidebar />

      <div className="main-content">

        <div className="profile-page">

          <div className="profile-box">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile"
            />

            <h1>
              {username}
            </h1>

            <p>
              {
                role === "ADMIN"
                  ? "Contract Labour Management Admin"
                  : "Contract Labour Management Employee"
              }
            </p>

            <div className="profile-details">

              <div className="detail-card">

                <h3>Email</h3>

                <span>
                  {username}@bhel.com
                </span>

              </div>

              <div className="detail-card">

                <h3>Department</h3>

                <span>
                  Contract Management
                </span>

              </div>

              <div className="detail-card">

                <h3>Role</h3>

                <span>
                  {
                    role === "ADMIN"
                      ? "Administrator"
                      : "Employee"
                  }
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;