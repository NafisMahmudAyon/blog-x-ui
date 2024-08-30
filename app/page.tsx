import Hero from "@/components/Hero";
import Tabs from "@/components/Tabs";
import { ViewportChanger } from "@/components/Test";


export default function Home() {

  return (
    <main className=" bg-[#212529] ">
      <Hero />
      <div className="px-2 pb-10 lg-px-4">
        <Tabs />
      </div>
      <ViewportChanger />
    </main>
  );
}
