import React, { useState } from "react";

function Counter() {
  // Step 1: Initialize state
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "30px",
        padding: "20px",
        border: "2px solid gray",
        borderRadius: "10px",
        width: "300px",
        margin: "30px auto",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2>React Counter App</h2>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        Current Count: {count}
      </p>

      {/* Increment Button */}
      <button
        onClick={() => setCount(count + 1)}
        style={{
          margin: "5px",
          padding: "10px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Increment
      </button>

      {/* Decrement Button */}
      <button
        onClick={() => setCount(count - 1)}
        style={{
          margin: "5px",
          padding: "10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Decrement
      </button>

      {/* Reset Button */}
      <button
        onClick={() => setCount(0)}
        style={{
          margin: "5px",
          padding: "10px",
          backgroundColor: "gray",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
