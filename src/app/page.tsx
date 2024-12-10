import Intro from "./Intro";
import Follow from "@/app/Follow";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-white to-gray-100 px-6 sm:px-10">
      <main className="max-w-4xl w-full space-y-16">
        {/* Introduction Section */}
        <section>
          <Intro />
        </section>

        {/* Follow Section */}
        <section>
          <Follow />
        </section>
      </main>
    </div>
  );
}
