
import {Profile} from "./components/profile/profile";
import { Navbar } from "./components/navbar/Navbar";
import { Servicos } from "./components/servicos/services";
export default function Home() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Profile />
      <Servicos />
    </div>
  );
}
