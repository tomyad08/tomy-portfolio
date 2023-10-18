import Image from "next/image";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import Portfolio from "./Components/portfolio";
import AskForm from "./Components/Form";
import Working from "./Components/Working";

export default function Home() {
  return (
    <div className="bg-slate-200">
      <NavBar />
      <Banner />
      <Portfolio />
      <Working />
      <AskForm />
    </div>
  );
}
