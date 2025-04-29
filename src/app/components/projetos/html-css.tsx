'use client';

import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Triangle } from 'lucide-react';
import { useState } from "react";

export function HtmlCss() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Detecção de mobile (opcionalmente mais refinada com libs ou context)
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  const cards = [
    {
      title: "Spotify",
      image: "/images/projeto-js-spotify.png",
      description:
        "Projeto em JavaScript, CSS e HTML, onde procurei replicar a interface do Spotify com foco em responsividade e fidelidade visual.",
      vercel: "https://spotify-kappa-ivory.vercel.app/",
      github: "https://github.com/NicollasMDs7/Spotify",
    },
    {
      title: "Calculadora",
      image: "/images/calculadora-js.png",
      description:
        "Neste projeto, busquei entender a base do HTML, CSS e JavaScript.",
      vercel: "https://calculadora-teal-one.vercel.app/",
      github: "https://github.com/NicollasMDs7/Calculadora",
    },
    {
      title: "Dev-coffe",
      image: "/images/cafeteria.png",
      description:
        "Este projeto é um site de uma cafeteria chamada DevClub Café, criado com HTML e CSS.",
      vercel: "https://dev-club-coffe.vercel.app/",
      github: "https://github.com/NicollasMDs7/DevClubCoffe",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center w-full">
      {cards.map((card, index) => {
        const isActive = activeCard === index;
        return (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4 flex justify-center">
            <Card
              className="relative group w-full h-80 overflow-hidden bg-transparent border border-gray-600 rounded-xl"
              onClick={() => isMobile && setActiveCard(isActive ? null : index)}
            >
              {/* Imagem */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div
                className={`
                  absolute inset-0 bg-black bg-opacity-40 
                  transition-opacity duration-300
                  ${isActive ? 'opacity-100' : 'opacity-0'} 
                  sm:group-hover:opacity-100
                `}
              />

              {/* Título */}
              <CardTitle
                className={`
                  absolute top-4 left-1/2 -translate-x-1/2 text-blue-100 
                  drop-shadow-[0_0_0.3rem_#00B4D8] hover:drop-shadow-[0_0_0.5rem_#00B4D8] text-lg
                  transition-all duration-300
                  ${isActive ? 'opacity-100' : 'opacity-0'}
                  sm:group-hover:opacity-100
                `}
              >
                {card.title}
              </CardTitle>

              {/* Descrição */}
              <CardDescription
                className={`
                  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center px-6 w-full max-w-[500px] text-base leading-relaxed
                  transition-all duration-300
                  ${isActive ? 'opacity-100' : 'opacity-0'}
                  sm:group-hover:opacity-100
                `}
              >
                <p>{card.description}</p>
              </CardDescription>

              {/* Footer */}
              <CardFooter
                className={`
                  absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 text-white mt-6
                  transition-all duration-300
                  ${isActive ? 'opacity-100' : 'opacity-0'}
                  sm:group-hover:opacity-100
                `}
              >
                <Button
                  variant="secondary"
                  className="bg-transparent text-blue-100 hover:text-black drop-shadow-[0_0_0.3rem_#00B4D8] h-12"
                >
                  <a href={card.vercel} target="_blank" className="flex flex-col items-center">
                    Vercel <Triangle />
                  </a>
                </Button>
                <Button
                  variant="secondary"
                  className="bg-transparent text-blue-100 hover:text-black drop-shadow-[0_0_0.3rem_#00B4D8] h-12"
                >
                  <a href={card.github} target="_blank" className="flex flex-col items-center">
                    Github <Github />
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
