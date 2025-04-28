import { About } from "./components/about/about";
import {Profile} from "./components/profile/profile";
import { Navbar } from "./components/navbar/Navbar";
export default function Home() {
  return (
    <div className="w-full h-screen bg-black">
      <Navbar />
      <Profile />
      <About />
    </div>
  );
}
