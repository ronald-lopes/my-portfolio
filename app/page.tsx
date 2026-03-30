import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <div id="home">
        <Header />
        <h1 className="text-4xl text-gray-800 dark:text-gray-200">
          Hello World!
        </h1>
      </div>
    </>
  );
}
