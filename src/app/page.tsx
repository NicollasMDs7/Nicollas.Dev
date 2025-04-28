import { About } from "./components/about/about";
import {Profile} from "./components/profile/profile";
export default function Home() {
  return (
    <div>
      <Profile />
      <About />
    </div>
  );
}
