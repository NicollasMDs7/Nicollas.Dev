
import {Profile} from "./components/profile/profile";
import { Navbar } from "./components/navbar/Navbar";
import { Servicos } from "./components/servicos/services";
import { About } from "./components/about/about";
import { Formacao } from "./components/formation/formation";
import { Projetos } from "./components/projectos/projectos";
import { Contato } from "./components/contato/contato";
import { Footer } from "./components/footer/footer";
export default function Home() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Profile />
      <Servicos />
      <About />
      <Formacao />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}
