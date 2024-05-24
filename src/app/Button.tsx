import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import Follow from "./Follow";

function Button() {
  return (
    <div className="" style={{ padding: 20 }}>
      <button
        style={{
          backgroundColor: "Blue",
          width: 200,
          height: 40,
          borderRadius: 10,
          fontSize: 20,
          color: "white",
          fontWeight: 500,
        }}
      >
        Connect
      </button>
    </div>
  );
}

export default Button;
