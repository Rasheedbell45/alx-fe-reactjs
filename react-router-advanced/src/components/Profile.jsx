import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h2>User Profile</h2>
      <nav>
        <Link to="details" style={{ marginRight: "1rem" }}>Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Nested Routes */}
      <div style={{ marginTop: "1rem" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
