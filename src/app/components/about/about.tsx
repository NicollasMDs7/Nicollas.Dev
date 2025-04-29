"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function About() {
  const techIcons = [
    { src: "https://img.icons8.com/color/48/html-5--v1.png", alt: "HTML5" },
    { src: "https://img.icons8.com/color/48/css3.png", alt: "CSS3" },
    {
      src: "https://img.icons8.com/color/48/javascript--v1.png",
      alt: "JavaScript",
    },
    {
      src: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-typescript-an-open-source-programming-language-developed-and-maintained-by-microsoft-logo-color-tal-revivo.png",
      alt: "TypeScript",
    },
    { src: "https://img.icons8.com/office/40/react.png", alt: "React" },
    { src: "https://img.icons8.com/fluency/48/nextjs.png", alt: "Next.js" },
    { src: "https://img.icons8.com/nolan/64/node-js.png", alt: "Node.js" },
    {
      src: "https://img.icons8.com/fluency/48/tailwind_css.png",
      alt: "Tailwind CSS",
    },
    {
      src: "https://img.icons8.com/color/48/spring-logo.png",
      alt: "Spring Boot",
    },
    { src: "https://img.icons8.com/color/48/net-framework.png", alt: ".NET" },
    { src: "https://img.icons8.com/color/48/python--v1.png", alt: "Python" },
    { src: "https://img.icons8.com/color/48/mysql-logo.png", alt: "MySQL" },
    { src: "https://img.icons8.com/color/48/mongodb.png", alt: "MongoDB" },
    { src: "https://img.icons8.com/color/48/redis--v1.png", alt: "Redis" },
  ];

  const extendedIcons = [
    ...techIcons,
    ...techIcons,
    ...techIcons,
    ...techIcons,
    ...techIcons,
    ...techIcons,
    ...techIcons,
    ...techIcons,
    ...techIcons,
    ...techIcons,
    ...techIcons,
    ...techIcons,
    ...techIcons,
    ...techIcons,
    ...techIcons,
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemWidth = 64;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => prevIndex + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="sobre" className="w-full flex justify-center items-center py-16">
      <div className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] flex flex-col items-center">
        <Card className="bg-[#222222] border-none shadow-lg w-full overflow-hidden">
          <div className="w-full text-center pt-6 pb-2">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] ">
              Sobre mim
            </h2>
          </div>

          <div className="flex flex-col md:flex-row px-4 md:px-8">
            <div className="w-full md:w-[60%] pr-0 md:pr-6 flex flex-col justify-center">
              <p className="text-white text-base mb-3 leading-relaxed">
                Sempre fui apaixonado por tecnologia e negócios. Essa paixão me
                levou a me formar em Gestão Comercial e a seguir estudando
                Sistemas de Informação, buscando unir estratégia, inovação e
                tecnologia para criar soluções que fazem a diferença.
              </p>

              <p className="text-white text-base mb-3 leading-relaxed">
                Hoje, com 24 anos, sigo em busca de experiência e crescimento,
                sempre focado em trabalhar com o que realmente amo. Cada projeto
                é uma oportunidade de aprender, evoluir e chegar ainda mais
                longe.
              </p>

              <p className="text-white text-base mb-3 leading-relaxed">
                Minha missão é transformar ideias em realidade e ajudar negócios
                a crescerem usando a tecnologia como aliada. Estou construindo
                uma jornada de muita dedicação, vontade de fazer acontecer e
                paixão pelo que faço.
              </p>

              <div className="mt-6">
                <div className="mx-auto w-[336px] overflow-hidden">
                  <div
                    className="flex transition-all duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${startIndex * itemWidth}px)`,
                    }}
                  >
                    {extendedIcons.map((icon, index) => (
                      <div
                        key={index}
                        className="inline-flex items-center justify-center w-12 h-12 p-2 mx-2 bg-[#1a1a1a] rounded-md flex-shrink-0"
                      >
                        <img
                          width="28"
                          height="28"
                          src={icon.src}
                          alt={icon.alt}
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-12">
                <a
                  href="https://drive.google.com/uc?export=download&id=1jLUuPKxCod23WP6ae7hN-NiDlF6ivxx1"
                  download
                  rel="noopener noreferrer"
                >
                  <Button
                    className="w-[180px] h-[45px]  border-1 border-white rounded-full cursor-pointer
                  bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] 
                  hover:opacity-90 transition-opacity hover:scale-110 duration-300
          "
                  >
                    <Download className="mr-2" />
                    Baixar CV
                  </Button>
                </a>
              </div>
            </div>

            <div className="w-full md:w-[40%] flex items-center justify-center order-first md:order-last py-4 md:py-6">
              <div className="relative">
                <Image
                  src="/images/codando.png"
                  alt="Desenvolvedor codando"
                  width={320}
                  height={320}
                  className="relative z-10 object-contain"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
