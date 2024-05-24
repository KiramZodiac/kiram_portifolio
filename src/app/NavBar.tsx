import React from "react";
import Link from "next/link";
import Home from "./page";

function NavBar() {
  return (
    <div className=" pt-5 pr-4 ">
      <div className="flex float-right gap-5 text-blue-500 font-bold  ">
        <ul>
          <li className=" hover:text-xl">
            <Link href="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li className=" hover:text-xl">
            <Link href="/About">About</Link>
          </li>
        </ul>
        <ul>
          <li className=" hover:text-xl">
            <Link href="/Skills">Skills</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
