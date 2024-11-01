

import Link from "next/link";
import Follow from "../Follow";

interface skillsProps {
  tittle: string;
  value: number;
  rangeValue: string;
}

const Skills = ({ tittle, value, rangeValue }: skillsProps) => {
  return (
    <div className=" justify-center flex">
      <div className="flex gap-4 p-2 pl-16">
        <ul>
          <li>{tittle}</li>
        </ul>

        <input type="range" max={90} value={value} readOnly />
        <span id="rangeValue">{rangeValue}</span>
      </div>
    </div>
  );
};

function page() {
  return (
    <div className="  justify-center flex flex-col items-center h-screen">
     
      <h1 className=" text-2xl  font-bold ">MY SKILLS</h1>
      <div className=" pt-10 text-center font-bold">
        <div className="">
          <Skills tittle="HTML 5" value={95} rangeValue={"95%"} />

          <Skills tittle="CSS 5" value={90} rangeValue={"90%"} />

          <Skills tittle="JAVASCRIPT" value={80} rangeValue="90%" />
          <Skills tittle="REACT" value={80} rangeValue={"80%"} />
          <Skills tittle="REACT-NATIVE" value={80} rangeValue={"80%"} />
          <Skills tittle="PYTHON" value={70} rangeValue={"70%"} />
          <Skills tittle="GIT & GITHUB" value={95} rangeValue={"95%"} />
          <Skills tittle="OOP PROGRAMMING" value={70} rangeValue={"70%"} />
        </div>
      </div>

      <div className=" ">
        <h1 className=" font-bold text-blue-950">My Projects on github</h1>
        <div className=" text-blue-400">
          <div className="">
            <li>
              <Link href={"https://github.com/KiramZodiac/Calculator_App"}>
                Calculator js App
              </Link>
            </li>
            <li>
              <Link href="https://github.com/zonaster/zonaster-mobile-application/tree/feature/zon-14-create-homescreen">
                Zonaster Events App
              </Link>
            </li>
            <li>
              <Link href="https://mobilerepairpros.netlify.app">
                Mechanics Website
              </Link>
            </li>
            <li>
              <Link href="https://github.com/KiramZodiac/localStorage_todo">
                To-Do list App
              </Link>
            </li>
          </div>
        </div>
        <p>And many more in build!</p>
      </div>
      <div className=" pl-12">
        <Follow />
      </div>
    </div>
  );
}
export default page;
