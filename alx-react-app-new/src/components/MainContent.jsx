import React from "react";

function MainContent() {
  return (
    <main
      style={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#e6f2ff",
        minHeight: "200px",
      }}
    >
      <h2 style={{ color: "darkgreen" }}>Welcome to My City List</h2>
      <p style={{ fontSize: "18px" }}>
        Explore some of my favorite cities from around the world!
      </p>
    </main>
  );
}

export default MainContent;
