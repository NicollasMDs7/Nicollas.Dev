"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="h-16 sm:h-18 flex items-center justify-between px-2 sm:px-4 fixed top-0 w-full z-50 bg-[#171718] border-b border-gray-700">
      {/* Logo */}
      <div className="pl-2 sm:pl-6 md:pl-12 lg:pl-36 flex items-center">
        <Image
          src="/images/logo.png"
          alt="Perfil"
          width={160}
          height={60}
          className="max-w-[100px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px] h-auto"
        />
      </div>

      {/* Menu para desktop e tablet */}
      <div className="hidden sm:flex justify-center flex-1">
        <ul className="flex flex-wrap gap-4 md:gap-8 lg:gap-16">
          <li className="transition transform hover:scale-110 bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
            <a href="#formacao">Formações</a>
          </li>
          <li className="transition transform hover:scale-110 bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
            <a href="#projetos">Projetos</a>
          </li>
          <li className="transition transform hover:scale-110 bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </div>

      {/* Botão do menu mobile */}
      <button
        className="sm:hidden text-white p-2"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="sm:hidden fixed inset-0 top-16 z-40">
          <ul className="flex flex-col items-center justify-center gap-8 pt-10">
            <li className="transition transform hover:scale-110 bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] text-2xl font-bold">
              <a href="#formacao" onClick={toggleMenu}>
                Formações
              </a>
            </li>
            <li className="transition transform hover:scale-110 bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] text-2xl font-bold">
              <a href="#projetos" onClick={toggleMenu}>
                Projetos
              </a>
            </li>
            <li className="transition transform hover:scale-110 bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] text-2xl font-bold">
              <a href="#contato" onClick={toggleMenu}>
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
