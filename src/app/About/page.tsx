import React from "react";
import NavBar from "../NavBar";
import Image from "next/image";
import Button from "../Button";
import Follow from "../Follow";

function page() {
  return (
    <div>
      <NavBar />
      <div className=" p-20">
        <div className=" justify-items-center text-center text-2xl pt-10 font-bold">
          <h1>ABOUT ME</h1>
        </div>
        <div className=" flex">
          <div className="">
            <div className=" row">
              <div className="  col-md-6">
                <Image
                  alt="my image"
                  src="/akram.jpg"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

          <div className=" col-md-6">
            <div className="max-w-screen-lg">
              <div className=" justify-items-center pl-20 mt-48">
                <p>
                  Hello! I{"'"}m{" "}
                  <span className=" font-bold">Akram Mageye,</span> a passionate
                  and dedicated software developer with a knack for creating
                  innovative and efficient solutions. With a solid foundation in
                  Html,Css5, JavaScript,React,React-Native, Python, Java, and
                  other key programming languages. I specialize in web
                  development, mobile app development, backend development, etc.
                  My journey in software development began three years ago, and
                  since then, I{"'"}ve been committed to honing my skills and
                  staying updated with the latest industry trends
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
