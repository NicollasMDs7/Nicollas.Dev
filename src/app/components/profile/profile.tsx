"use client";
import Image from "next/image";
import { Icons } from "./icons";
import { useEffect, useState } from "react";

export function Profile() {
  const fullText = "Desenvolvedor Web";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let index = 0;
    let interval: NodeJS.Timeout;

    const typeWriter = () => {
      interval = setInterval(() => {
        if (!isDeleting) {
          if (index < fullText.length) {
            setDisplayedText(fullText.substring(0, index + 1));
            index++;
          } else {
            clearInterval(interval);
            setTimeout(() => {
              setIsDeleting(true);
            }, 5000);
          }
        } else {
          if (index > 0) {
            setDisplayedText(fullText.substring(0, index - 1));
            index--;
          } else {
            setIsDeleting(false);
          }
        }
      }, 150);
    };

    typeWriter();
    return () => clearInterval(interval);
  }, [isDeleting]);

  return (
    <section className="w-full min-h-[100vh] flex flex-col justify-center items-center py-16 lg:py-24 overflow-x-hidden">
      <div className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 mt-10 lg:mt-0">
        {/* Imagem - Em cima no mobile, à direita no desktop */}
        <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[45%] flex justify-center items-center relative group cursor-pointer order-1 lg:order-2">
          <div>
            <Image
              src="/images/perfil2.png"
              alt="Perfil"
              width={320}
              height={320}
              className="relative z-10 object-contain scale-90 sm:scale-95 md:scale-100"
              priority
            />
          </div>
        </div>
        {/* Conteúdo de texto - Embaixo no mobile, à esquerda no desktop */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center order-2 lg:order-1 mt-6 lg:mt-0">
          <strong className="text-xl md:text-2xl font-semibold text-white text-center lg:text-left">
            Olá, Eu sou o
          </strong>
          <span className="mt-2 md:mt-4 text-3xl md:text-4xl font-bold text-white text-center lg:text-left">
            Nicollas Dias
          </span>
          <div className="mt-2 md:mt-4 cursor-pointer transition transform hover:scale-100 text-center lg:text-left">
            <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] text-3xl md:text-5xl lg:text-6xl font-semibold relative">
              {displayedText}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] animate-blink">
                |
              </span>
            </strong>
          </div>
          <div className="mt-4 flex gap-4 justify-center lg:justify-start">
            <Icons />
          </div>
          <div className="w-full mt-6 md:mt-8 text-white bg-[#222222] flex rounded-lg overflow-hidden">
            <div className="w-1/3 flex flex-col p-2 sm:p-3 md:p-6 text-sm sm:text-base md:text-xl lg:text-2xl relative">
              <div className="absolute right-0 top-[20%] h-[60%] w-px bg-white"></div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] text-xl sm:text-2xl md:text-3xl font-semibold">
                +2
              </span>
              <span className="text-[10px] whitespace-nowrap sm:text-sm md:text-base ">
                anos de experiência
              </span>
            </div>
            <div className="w-1/3 flex flex-col p-2 sm:p-3 md:p-6 text-sm sm:text-base md:text-xl lg:text-2xl relative">
              <div className="absolute right-0 top-[20%] h-[60%] w-px bg-white"></div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] text-xl sm:text-2xl md:text-3xl font-semibold">
                +20
              </span>
              <span className="text-[10px] whitespace-nowrap sm:text-sm md:text-base ">
                projetos concluídos
              </span>
            </div>
            <div className="w-1/3 flex flex-col p-2 sm:p-3 md:p-6 text-sm sm:text-base md:text-xl lg:text-2xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] text-xl sm:text-2xl md:text-3xl font-semibold">
                +50
              </span>
              <span className="text-[10px] whitespace-nowrap sm:text-sm md:text-base ">
                clientes satisfeitos
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Nova div adicionada abaixo de todos os elementos */}
      <div className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] mt-16 lg:mt-24 flex justify-center flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900]">
          Meus Serviços
        </h2>
        <p className="md:text-lg text-center text-white">
          Ajudo a transformar sua ideia em realidade, criando soluções digitais
          sob medida. Seja para tirar um projeto do papel ou dar vida nova ao
          seu negócio online.
        </p>
      </div>
    </section>
  );
}
