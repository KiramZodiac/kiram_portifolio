import Button from "@/Button";
import React from "react";

function Intro() {
  return (
    <div className=" pr-52">
      <div className=" text-2xl font-bold ">
        <h1>Hey, </h1>
        <h1>
          I'am <span className=" text-blue-500">Kiram.</span>
        </h1>
        <h2>A Software Developer</h2>
        <Button />
      </div>

      <div
        style={{
          width: "50vw", // 50% of viewport width
          height: "50vw", // 50% of viewport width
          maxWidth: "400px",
          maxHeight: "400px",
          borderRadius: "50%",
          marginLeft: "auto", // Align to the right
          marginRight: "0",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // Center the image within the circle
        }}
      >
        <img
          src="akram.jpg"
          alt="Description"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}

export default Intro;
