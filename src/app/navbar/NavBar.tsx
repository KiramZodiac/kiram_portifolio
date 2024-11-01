'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {

  const router = usePathname()
console.log(router);



const links = [{
  label:'Home',
  href:'/dashboard'
},
{
  label:"About",
  href:'/About'

},
{
  label:'Skills',
  href:'/Skills'
}

]

  return (
 <div className=" flex px-5 py-5  space-x-5 border-b text-2xl w-full bg-white fixed justify-center">
{links.map((link)=>(
  <ul key={link.href}>
    <Link href={link.href}>
    <li  className={`${router === link.href ? ' text-blue-600 font-semibold':'text-gray-600 rounded'}`}>{link.label}</li>
    </Link>
  </ul>
))}

 </div>
  );
}

export default NavBar;
