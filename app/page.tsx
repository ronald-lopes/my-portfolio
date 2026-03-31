import { Header } from "@/components/header";
import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <div id="home">
        <Header />
        <Hero />
        <About />
      </div>
    </>
  );
}
