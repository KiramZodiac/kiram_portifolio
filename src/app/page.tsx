import Image from "next/image";
import NavBar from "./NavBar";
import Intro from "./Intro";
import Button from "@/app/Button";
import Follow from "@/app/Follow";
import { global } from "styled-jsx/css";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <main className=" justify-between p-20">
        <Intro />

        <Follow />
      </main>
    </div>
  );
}
