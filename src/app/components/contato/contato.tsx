"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [enviando, setEnviando] = useState(false);
  const [mensagemStatus, setMensagemStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    try {
      // Aqui você pode implementar a lógica para enviar o email
      // Exemplo: await fetch('/api/enviar-email', { method: 'POST', body: JSON.stringify(formData) })
      // Simulando um envio bem-sucedido
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMensagemStatus("Mensagem enviada com sucesso!");
      setFormData({ nome: "", email: "", mensagem: "" });
      setTimeout(() => {
        setMensagemStatus("");
      }, 5000);
    } catch (error) {
      setMensagemStatus("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contato" className="w-full py-16">
      <h2 className="text-4xl font-bold text-center text-[#FD6F00] drop-shadow-[0_0_0.3rem_#FD6F00] mb-10">
        Contato
      </h2>
      <div className="max-w-5xl mx-auto px-4 flex justify-center">
        {/* Formulário de Contato */}
        <div className="bg-gray-800/50 p-8 rounded-lg shadow-lg border border-gray-700 w-full max-w-2xl">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Envie uma mensagem
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="nome" className="block text-gray-300 mb-2 text-lg">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#FD6F00] focus:border-transparent text-lg"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-300 mb-2 text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#FD6F00] focus:border-transparent text-lg"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="mensagem" className="block text-gray-300 mb-2 text-lg">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows={6}
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#FD6F00] focus:border-transparent text-lg"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={enviando}
              className={cn(
                "w-full bg-[#FD6F00] hover:bg-[#e66500] text-white font-bold py-3 px-6 rounded-md transition-all duration-300 text-lg",
                enviando && "opacity-70 cursor-not-allowed"
              )}
            >
              {enviando ? "Enviando..." : "Enviar Mensagem"}
            </button>
            {mensagemStatus && (
              <p
                className={cn(
                  "mt-5 text-center text-lg",
                  mensagemStatus.includes("sucesso")
                    ? "text-green-400"
                    : "text-red-400"
                )}
              >
                {mensagemStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
