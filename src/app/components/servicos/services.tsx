import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Globe,
  MousePointerClick,
  ShoppingCart,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Servicos() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
          <Card className="bg-[#222222] border-none shadow-lg flex flex-col items-center text-center p-3 hover:scale-105 transition-transform duration-300 group w-full max-w-[280px] mx-auto h-[100%]">
            <CardHeader className="flex flex-col items-center py-1.5 px-2 space-y-1.5 w-full">
              <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center group-hover:bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] transition-colors duration-300">
                <Globe className="w-6 h-6 text-[#FD6F00] group-hover:text-white transition-colors duration-300" />
              </div>
              <CardTitle className="text-xl font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900]">
                Sites Institucionais
              </CardTitle>
            </CardHeader>
            <CardDescription className="text-sm text-white -mt-1 mb-0.5">
              Presença online profissional
            </CardDescription>
            <CardContent className="text-base py-1 px-3 w-full">
              <p className="text-white">
                Desenvolvimento de sites para empresas, negócios locais ou
                marcas pessoais com design moderno.
              </p>
            </CardContent>
            <CardFooter className=" mb-4 w-full">
              <Button
                asChild
                variant="default"
                className="w-full bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] hover:opacity-90 transition-opacity hover:scale-110 duration-300"
              >
                <Link
                  href="https://wa.me/5511951783281?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20Sites%20Institucionais"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Saiba mais
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-[#222222] border-none shadow-lg flex flex-col items-center text-center p-3 hover:scale-105 transition-transform duration-300 group w-full max-w-[280px] mx-auto h-[100%]">
            <CardHeader className="flex flex-col items-center py-1.5 px-2 space-y-1.5 w-full">
              <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center group-hover:bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] transition-colors duration-300">
                <MousePointerClick  className="w-6 h-6 text-[#FD6F00] group-hover:text-white transition-colors duration-300" />
              </div>
              <CardTitle className="text-xl font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900]">
                Landing Pages
              </CardTitle>
            </CardHeader>
            <CardDescription className="text-sm text-white -mt-1 mb-0.5">
              Captação de leads e vendas
            </CardDescription>
            <CardContent className="text-base py-1 px-3 w-full">
              <p className="text-white">
                Páginas otimizadas para captar clientes ou vender produtos de
                forma eficiente, com foco em conversão.
              </p>
            </CardContent>
            <CardFooter className=" mb-4 w-full">
              <Button
                asChild
                variant="default"
                className="w-full bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] hover:opacity-90 transition-opacity hover:scale-110 duration-300"
              >
                <Link
                  href="https://wa.me/5511951783281?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20Landing%20Pages"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Saiba mais
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-[#222222] border-none shadow-lg flex flex-col items-center text-center p-3 hover:scale-105 transition-transform duration-300 group w-full max-w-[280px] mx-auto h-[100%]">
            <CardHeader className="flex flex-col items-center py-1.5 px-2 space-y-1.5 w-full">
              <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center group-hover:bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] transition-colors duration-300">
                <ShoppingCart  className="w-6 h-6 text-[#FD6F00] group-hover:text-white transition-colors duration-300" />
              </div>
              <CardTitle className="text-xl font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900]">
                Lojas Virtuais
              </CardTitle>
            </CardHeader>
            <CardDescription className="text-sm text-white -mt-1 mb-0.5">
              Venda online simplificada
            </CardDescription>
            <CardContent className="text-base py-1 px-3 w-full">
              <p className="text-white">
                Criação de e-commerces completos com integração de pagamentos,
                gestão de estoque e logística.
              </p>
            </CardContent>
            <CardFooter className=" mb-4 w-full">
              <Button
                asChild
                variant="default"
                className="w-full bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] hover:opacity-90 transition-opacity hover:scale-110 duration-300"
              >
                <Link
                  href="https://wa.me/5511951783281?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20Lojas%20Virtuais"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Saiba mais
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-[#222222] border-none shadow-lg flex flex-col items-center text-center p-3 hover:scale-105 transition-transform duration-300 group w-full max-w-[280px] mx-auto h-[100%]">
            <CardHeader className="flex flex-col items-center py-1.5 px-2 space-y-1.5 w-full">
              <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center group-hover:bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] transition-colors duration-300">
                <LayoutDashboard  className="w-6 h-6 text-[#FD6F00] group-hover:text-white transition-colors duration-300" />
              </div>
              <CardTitle className="text-xl font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900]">
                Aplicações Web
              </CardTitle>
            </CardHeader>
            <CardDescription className="text-sm text-white -mt-1 mb-0.5">
              Sistemas personalizados
            </CardDescription>
            <CardContent className="text-base py-1 px-3 w-full">
              <p className="text-white">
                Plataformas sob medida como agendamentos e
                painéis administrativos para seu negócio.
              </p>
            </CardContent>
            <CardFooter className=" mb-4 w-full">
              <Button
                asChild
                variant="default"
                className="w-full bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] hover:opacity-90 transition-opacity hover:scale-110 duration-300"
              >
                <Link
                  href="https://wa.me/5511951783281?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20Aplicações%20Web"
                  rel="noopener noreferrer"
                >
                  Saiba mais
                </Link>
              </Button>
            </CardFooter>
          </Card>


        </div>
      </div>
    </section>
  );
}
