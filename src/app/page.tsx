
import {Profile} from "./components/profile/profile";
import { Navbar } from "./components/navbar/Navbar";
import { Servicos } from "./components/servicos/services";
import { About } from "./components/about/about";
export default function Home() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Profile />
      <Servicos />
      <About />
    </div>
  );
}
