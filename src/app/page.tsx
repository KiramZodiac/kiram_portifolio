import Image from "next/image";
import NavBar from "./NavBar";
import Intro from "./Intro";
import Button from "@/Button";
import Follow from "@/Follow";
import { global } from "styled-jsx/css";

export default function Home() {
  return (
    <div className=" pl-24">
      <NavBar />
      <main className=" justify-between p-20">
        <Intro />

        <Follow />
      </main>
    </div>
  );
}
