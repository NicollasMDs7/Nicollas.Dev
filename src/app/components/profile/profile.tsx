import Image from "next/image";
import { Icons } from "./icons";
export function Profile() {
  return (
    <section className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[70%] h-[80%] flex justify-around items-center ">
        <div className="w-[50%] h-[40%] flex flex-col justify-center ">
          <strong className="text-2xl font-semibold text-white">
            Olá, Eu sou o
          </strong>

          <span className="mt-4 text-4xl font-bold text-white">
            Nicollas Dias
          </span>
          <div className="mt-4 cursor-pointer transition transform hover:scale-100">
            <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] text-6xl font-semibold relative">
              Desenvolvedor Web
              <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] animate-blink">
                |
              </span>
            </strong>
          </div>
          <div className="mt-4 flex gap-4">
            <Icons />
          </div>
          <div className="w-full h-full mt-4 text-white bg-[#222222] flex">
            <div className="w-1/3 flex flex-col p-6 text-2xl relative">
              <div className="absolute right-0 top-6 h-[60%] w-px bg-white"></div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] text-3xl font-semibold">
                2
              </span>
              anos de experiência
            </div>

            <div className="w-1/3 flex flex-col p-6 text-2xl relative">
              <div className="absolute right-0 top-6 h-[60%] w-px bg-white"></div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] text-3xl font-semibold">
                +20
              </span>
              projetos concluídos
            </div>

            <div className="w-1/3 flex flex-col p-6 text-2xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] text-3xl font-semibold">
                +50
              </span>
              Clientes satisfeitos
            </div>
          </div>
        </div>

        <div className="w-[40%] h-[60%] flex justify-center items-center relative group cursor-pointer">
          {/* Fundo redondo perfeitamente circular com sombra */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-[#222222] group-hover:scale-120"></div>

          {/* Imagem ajustada para caber bem no círculo com efeito de zoom */}
          <Image
            src="/images/perfil2.png"
            alt="Perfil"
            width={300}
            height={300}
            className="relative z-10 object-contain mb-42"
          />
        </div>
      </div>
    </section>
  );
}
