import Link from "next/link";
import React from "react";
import {
  BsGithub,
  BsLinkedin,
  BsTelephone,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";

function Follow() {
  return (
    <div
      className=" flex gap-5"
      style={{
        paddingTop: 100,
        marginLeft: 10,
      }}
    >
      <ul>
        <li>
          <Link href={"https://www.linkedin.com/in/kiram-zodiac-78b292289/"}>
            <BsGithub />
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href={"https://www.linkedin.com/in/kiram-zodiac-78b292289/"}>
            <BsLinkedin />
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href={"https://x.com/KiramZodiac"}>
            <BsTwitter />
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href={""}>
            <BsTelephone />
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href={"Whatsapp:+256751214095"}>
            <BsWhatsapp />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Follow;
