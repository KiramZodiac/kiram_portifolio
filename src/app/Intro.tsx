
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Intro() {
  return (
    <div className="">
      <div className=" text-2xl font-bold">
        <h1>Hey,</h1>
        <h1>
          I{"'"}am <span className=" text-blue-500">Kiram Mageye.</span>
        </h1>
        <h2>A Software Developer</h2>
        <div className=" pt-20 pl-40"></div>
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
        <Image
          src="/akram.jpg"
          alt="Description"
          width={300}
          height={300}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <Button className=" bg-blue-500">Connect</Button>
    </div>
  );
}

export default Intro;
