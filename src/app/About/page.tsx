import React from "react";
import NavBar from "../NavBar";
import Image from "next/image";
import Button from "../Button";
import Follow from "../Follow";

function page() {
  return (
    <div className="">
      <NavBar />
      <div className="">
        <div className=" justify-items-center text-center text-2xl pt-10 font-bold">
          <h1>ABOUT ME</h1>
        </div>
        <div className=" flex">
          <div className="  col-md-6">
            {" "}
            <Image alt="my image" src="/ki3.jpeg" width={500} height={500} />
          </div>

          <div className="col-sm-12 col-md-6">
            <div className="max-w-screen-lg">
              <div className=" pt-40  text-center">
                <p>
                  Hello! I{"'"}m{" "}
                  <span className=" font-bold">Akram Mageye,</span> a passionate
                  and dedicated software developer with a knack for creating
                  innovative and efficient solutions. With a solid foundation in
                  <span className=" text-blue-400">
                    {" "}
                    Html,Css5, JavaScript,React,React-Native, Python, Java, and
                    other key programming languages.
                  </span>{" "}
                  I specialize in web development, mobile app development,
                  backend development, etc. My journey in software development
                  began three years ago, and since then, I{"'"}ve been committed
                  to honing my skills and staying updated with the latest
                  industry trends
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center flex">
        <Button />
        <Follow />
      </div>
    </div>
  );
}

export default page;
