import { Header } from "@/components/header";
import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <div id="home">
        <Header />
        <Hero />
        <About />
        <Work />
      </div>
    </>
  );
}
