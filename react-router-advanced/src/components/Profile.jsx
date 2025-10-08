import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>User Profile</h2>
      <p>Welcome to your profile dashboard. Use the links below to navigate:</p>

      <nav style={{ marginBottom: "1rem" }}>
        <Link to="details" style={{ marginRight: "1rem", color: "blue" }}>
          Profile Details
        </Link>
        <Link to="settings" style={{ color: "blue" }}>
          Profile Settings
        </Link>
      </nav>

      {/* Outlet is where nested routes (ProfileDetails, ProfileSettings) will be displayed */}
      <div style={{ padding: "1rem", backgroundColor: "#fafafa", borderRadius: "6px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
