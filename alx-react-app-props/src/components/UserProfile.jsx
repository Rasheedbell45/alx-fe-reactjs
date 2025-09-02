import { useContext } from "react";
import UserContext from "./UserContext";

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "20px auto",
        width: "300px",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "blue" }}>{userData.name}</h2>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
    </div>
  );
}

export default UserProfile;
