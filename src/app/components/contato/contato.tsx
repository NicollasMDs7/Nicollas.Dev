"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
    telefone: "",
  });
  const [enviando, setEnviando] = useState(false);
  const [mensagemStatus, setMensagemStatus] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.telefone.trim()) {
      newErrors.telefone = "Telefone é obrigatório";
    } else {
      // Verifica se o telefone tem o formato correto (11 números)
      const numerosTelefone = formData.telefone.replace(/\D/g, "");
      if (numerosTelefone.length !== 11) {
        newErrors.telefone = "Telefone deve conter 11 números (DDD + número)";
      }
    }
    if (!formData.mensagem.trim()) {
      newErrors.mensagem = "Mensagem é obrigatória";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Formatação para telefone
    if (name === "telefone") {
      let formattedValue = value.replace(/\D/g, ""); // Remove tudo que não é número

      // Limita a 11 dígitos
      if (formattedValue.length <= 11) {
        // Formata como (XX) XXXXX-XXXX
        if (formattedValue.length > 2) {
          formattedValue = `(${formattedValue.slice(
            0,
            2
          )}) ${formattedValue.slice(2)}`;
        }
        if (formattedValue.length > 10) {
          formattedValue = `${formattedValue.slice(
            0,
            10
          )}-${formattedValue.slice(10)}`;
        }
        setFormData((prev) => ({ ...prev, [name]: formattedValue }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Limpa o erro do campo quando o usuário começa a digitar
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setEnviando(true);
    setMensagemStatus("");

    try {
      const response = await fetch("/api/enviar-mensagem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          opcao: "Contato pelo site", // Valor padrão para o campo opcao
          mensagem: formData.mensagem,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMensagemStatus(
          "Mensagem enviada com sucesso! Entraremos em contato em breve."
        );
        setFormData({ nome: "", email: "", mensagem: "", telefone: "" });

        setTimeout(() => {
          setMensagemStatus("");
        }, 5000);
      } else {
        setMensagemStatus(
          `Erro ao enviar mensagem: ${data.erro || "Tente novamente"}`
        );
      }
    } catch (error) {
      setMensagemStatus("Erro ao enviar mensagem. Por favor, tente novamente.");
      console.error("Erro ao enviar formulário:", error);
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
              <label
                htmlFor="nome"
                className="block text-gray-300 mb-2 text-lg"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className={cn(
                  "w-full bg-gray-700 text-white border border-gray-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#FD6F00] focus:border-transparent text-lg",
                  errors.nome && "border-red-500"
                )}
                required
              />
              {errors.nome && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {errors.nome}
                </p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-gray-300 mb-2 text-lg"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={cn(
                  "w-full bg-gray-700 text-white border border-gray-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#FD6F00] focus:border-transparent text-lg",
                  errors.email && "border-red-500"
                )}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="telefone"
                className="block text-gray-300 mb-2 text-lg"
              >
                Telefone
              </label>
              <input
                type="text"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                className={cn(
                  "w-full bg-gray-700 text-white border border-gray-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#FD6F00] focus:border-transparent text-lg",
                  errors.telefone && "border-red-500"
                )}
                placeholder="(99) 99999-9999"
                required
              />
              {errors.telefone && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {errors.telefone}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="mensagem"
                className="block text-gray-300 mb-2 text-lg"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows={6}
                className={cn(
                  "w-full bg-gray-700 text-white border border-gray-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#FD6F00] focus:border-transparent text-lg",
                  errors.mensagem && "border-red-500"
                )}
                required
              ></textarea>
              {errors.mensagem && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {errors.mensagem}
                </p>
              )}
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
