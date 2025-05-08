"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Triangle } from "lucide-react";
import { useState, useEffect } from "react";

// Definindo a interface para os dados do projeto
interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  vercel: string | null;
}

export function Projetos() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleCard = (index: number): void => {
    if (isMobile) {
      setActiveCard(activeCard === index ? null : index);
    }
  };

  const projectsData: Project[] = [
    {
      title: "EntreLinhasJS",
      description:
        "Projeto onde entreguei uma Leading Page de um site de costureira, ultilizando NextsJS, Supabase, TailwindCSS e TypeScript.",
      image: "/images/entrelinhas.jpg",
      github: "https://github.com/NicollasMDs7/EntreLinhasJS",
      vercel: "https://entre-linhas-js.vercel.app/",
    },
    {
      title: "One-Climas",
      description:
        "Projeto onde entreguei um projeto de um site de clima, consumindo a API da OpenWeather.",
      image: "/images/one-climas.png",
      github: "https://github.com/NicollasMDs7/weater-app",
      vercel: "https://weater-app-mauve.vercel.app/",
    },
    {
      title: "Spotify",
      image: "/images/projeto-js-spotify.png",
      description:
        "Projeto em JavaScript, CSS e HTML, onde procurei replicar a interface do Spotify com foco em responsividade e fidelidade visual.",
      github: "https://github.com/NicollasMDs7/Spotify",
      vercel: "https://spotify-kappa-ivory.vercel.app/",
    },
    {
      title: "Calculadora",
      image: "/images/calculadora-js.png",
      description:
        "Neste projeto, busquei entender a base do HTML, CSS e JavaScript.",
      github: "https://github.com/NicollasMDs7/Calculadora",
      vercel: "https://calculadora-teal-one.vercel.app/",
    },
    {
      title: "Dev-coffe",
      image: "/images/cafeteria.png",
      description:
        "Este projeto é um site de uma cafeteria chamada DevClub Café, criado com HTML e CSS.",
      github: "https://github.com/NicollasMDs7/DevClubCoffe",
      vercel: "https://dev-club-coffe.vercel.app/",
    },
    {
      title: "Spring",
      description:
        "Projeto onde criei uma API de um CRUD de usuários, utilizando Spring Boot e consumi no front.",
      image: "/images/crud-java.png",
      github: "https://github.com/NicollasMDs7/ProjetoAPI/tree/main",
      vercel: null,
    },
    // {
    //   title: "Crud",
    //   description:
    //     "Projeto onde criei uma API de um CRUD de usuários, utilizando o .Net",
    //   image: "/images/crud.png",
    //   github: "https://github.com/NicollasMDs7/ProjetoAPI/tree/main",
    //   vercel: null,
    // },
    // {
    //   title: "Task-M",
    //   description:
    //     "Projeto onde criei uma aplicação de gerenciamento de tarefas, utilizando o Angular.",
    //   image: "/images/crud.png",
    //   github: "https://github.com/NicollasMDs7/Manager-Task",
    //   vercel: null,
    // },
    // {
    //   title: "Chat",
    //   description:
    //     "Projeto onde pratiquei minha lógica de programação, fazendo um sistema de autoatendimento.",
    //   image: "/images/crud-java.png",
    //   github: "https://github.com/NicollasMDs7/Autoatendimento",
    //   vercel: null,
    // },
  ];

  // Função para renderizar os botões do footer com base na disponibilidade dos links
  const renderFooterButtons = (project: Project, isActive: boolean) => {
    return (
      <CardFooter
        className={`
          absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 text-white mt-6
          transition-all duration-300
          ${isActive ? "opacity-100" : "opacity-0"}
          sm:group-hover:opacity-100
        `}
      >
        {project.vercel && (
          <Button
            variant="secondary"
            className="bg-transparent text-[#FD6F00] hover:text-black drop-shadow-[0_0_0.3rem_#FD6F00] h-12"
          >
            <a
              href={project.vercel}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              Vercel
              <Triangle className="h-5 w-5 mt-1" />
            </a>
          </Button>
        )}

        <Button
          variant="secondary"
          className="bg-transparent text-[#FD6F00] hover:text-black drop-shadow-[0_0_0.3rem_#FD6F00] h-12"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            Github
            <Github className="h-5 w-5 mt-1" />
          </a>
        </Button>
      </CardFooter>
    );
  };

  return (
    <section id="projetos" className="w-full py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#FD6F00] drop-shadow-[0_0_0.3rem_#FD6F00] mb-10">
          Projetos
        </h2>

        <div className="flex w-full flex-wrap justify-center">
          {projectsData.map((project, index) => {
            const isActive = activeCard === index;

            return (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <Card
                  className="relative group h-80 overflow-hidden bg-transparent border border-[#FD6F00] rounded-xl"
                  onClick={() => toggleCard(index)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                    className={`
                      absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300
                      ${isActive ? "opacity-100" : "opacity-0"}
                      sm:group-hover:opacity-100
                    `}
                  />

                  <CardTitle
                    className={`
                      absolute top-4 left-1/2 -translate-x-1/2 text-[#FD6F00]
                      drop-shadow-[0_0_0.3rem_#FD6F00] hover:drop-shadow-[0_0_0.5rem_#FD6F00] text-lg
                      transition-all duration-300
                      ${isActive ? "opacity-100" : "opacity-0"}
                      sm:group-hover:opacity-100
                    `}
                  >
                    {project.title}
                  </CardTitle>

                  {/* Descrição */}
                  <CardDescription
                    className={`
                      absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center px-6 w-full max-w-[500px] text-base leading-relaxed
                      transition-all duration-300
                      ${isActive ? "opacity-100" : "opacity-0"}
                      sm:group-hover:opacity-100
                    `}
                  >
                    {project.description}
                  </CardDescription>

                  {/* Footer com botões */}
                  {renderFooterButtons(project, isActive)}
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
