'use client';

import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useEffect, useState } from "react";

export function Java() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCard = (index: number) => {
    if (isMobile) {
      setActiveCard((prev) => (prev === index ? null : index));
    }
  };

  const cardData = [
    {
      title: "Spring",
      description:
        "Projeto onde criei uma API de um CRUD de usuários, utilizando Spring Boot e consumi no front.",
      image: "/images/crud-java.png",
      github: "https://github.com/NicollasMDs7/ProjetoAPI/tree/main",
    },
    {
      title: "Chat",
      description:
        "Projeto onde pratiquei minha lógica de programação, fazendo um sistema de autoatendimento.",
      image: "/images/crud-java.png",
      github: "https://github.com/NicollasMDs7/Autoatendimento",
    },
  ];

  return (
    <div className="flex w-full flex-wrap justify-center">
      {cardData.map((card, index) => {
        const isActive = activeCard === index;

        return (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <Card
              className="relative group h-80 overflow-hidden bg-transparent border border-gray-600 rounded-xl"
              onClick={() => toggleCard(index)}
            >
              {/* Imagem de fundo */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300
                ${isActive ? "opacity-100" : "opacity-0"}
                sm:group-hover:opacity-100`}
              />

              {/* Título */}
              <CardTitle
                className={`absolute top-4 left-1/2 -translate-x-1/2 text-blue-100 
                drop-shadow-[0_0_0.3rem_#00B4D8] hover:drop-shadow-[0_0_0.5rem_#00B4D8] text-lg 
                transition-all duration-300
                ${isActive ? "opacity-100" : "opacity-0"}
                sm:group-hover:opacity-100`}
              >
                {card.title}
              </CardTitle>

              {/* Descrição */}
              <CardDescription
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center px-6 w-full max-w-[500px] text-base leading-relaxed
                transition-all duration-300
                ${isActive ? "opacity-100" : "opacity-0"}
                sm:group-hover:opacity-100`}
              >
                {card.description}
              </CardDescription>

              {/* Footer */}
              <CardFooter
                className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 text-white mt-6
                transition-all duration-300
                ${isActive ? "opacity-100" : "opacity-0"}
                sm:group-hover:opacity-100`}
              >
                <Button
                  variant="secondary"
                  className="bg-transparent text-blue-100 hover:text-black drop-shadow-[0_0_0.3rem_#00B4D8] h-12"
                >
                  <a
                    href={card.github}
                    target="_blank"
                    className="flex flex-col items-center"
                  >
                    Github
                    <Github />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
