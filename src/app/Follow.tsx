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

  const socials =[
    {
    href:'https://www.linkedin.com/in/kiram-zodiac-78b292289/',

    icon:<BsGithub/>
  },
  {
    href:'https://www.linkedin.com/in/kiram-zodiac-78b292289/',

    icon:<BsLinkedin/>
  },
  {
    href:'https://x.com/KiramZodiac',

    icon:<BsTwitter/>
  },
  {
    href:"tel:+256751214095",

    icon:<BsTelephone/>
  },
  {
    href:"https://api.whatsapp.com/send?phone=+256751214095",

    icon:<BsWhatsapp/>
  },
 
]


  return (
    <div className="">
<div className=" flex space-x-5 pt-10 justify-center ">
  {socials.map((social)=>(
  
    <Link className=" text-blue-500 hover:text-gray-600" href={social.href}>
      {social.icon}
    </Link>
    
  ))}
</div>
    </div>
  );
}

export default Follow;
