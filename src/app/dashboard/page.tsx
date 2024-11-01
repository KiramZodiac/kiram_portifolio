
import Intro from "../Intro";

import Follow from "@/app/Follow";


export default function Home() {
  return (
    <div className=" flex justify-center px-10 py-20">
      <main className=" h-screen">
        <Intro />

        <Follow />
      </main>
    </div>
  );
}
