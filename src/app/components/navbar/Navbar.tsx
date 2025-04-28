"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-slate-900 h-12 flex items-center justify-between px-4 fixed top-0 w-full z-50">
      <div className="pl-6 gap-6 flex items-center">
        <Image
          src="/images/logo.png"
          alt="Perfil"
          width={80}
          height={40}
          className="max-w-[80%] sm:max-w-[200px] md:max-w-[400px] lg:max-w-[469px] h-auto"
        />
        <button className="text-white  sm:block">idioma</button>
      </div>

      {/* Menu items - escondido no mobile */}
      <ul className="hidden sm:flex gap-4 text-white">
        <li className="transition transform hover:scale-110 hover:text-cyan-400">
          <a href="/">Sobre</a>
        </li>
        <li className="transition transform hover:scale-110 hover:text-cyan-400">
          <a href="#formacao">Formações</a>
        </li>
        <li className="mr-10 transition transform hover:scale-110 hover:text-cyan-400">
          <a href="#projetos">Projetos</a>
        </li>
      </ul>

      {/* Botão do menu - visível no mobile */}
      <button
        className="sm:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menu dropdown (mobile) */}
      {menuOpen && (
        <ul className="absolute top-12 right-4 bg-slate-800 text-white flex flex-col gap-2 p-4 rounded-lg shadow-lg sm:hidden">
          <li className="transition transform hover:scale-110 hover:text-cyan-400">
            <a href="#hero">Sobre</a>
          </li>
          <li className="transition transform hover:scale-110 hover:text-cyan-400">
            <a href="#formacao">Formações</a>
          </li>
          <li className="transition transform hover:scale-110 hover:text-cyan-400">
            <a href="#projetos">Projetos</a>
          </li>
        </ul>
      )}
    </div>
  );
}
