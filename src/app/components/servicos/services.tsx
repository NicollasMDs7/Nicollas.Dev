"use client"

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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

export function Servicos() {
  // State to track if we're on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  // Initialize Embla carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    containScroll: "trimSnaps"
  });

  // Autoplay interval in milliseconds (5 seconds)
  const AUTOPLAY_INTERVAL = 5000;
  
  // Carousel navigation functions
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Setup autoplay
  useEffect(() => {
    if (!emblaApi || !isMobile) return;

    // Function to handle automatic slide change
    const autoplay = () => {
      if (document.hidden) return; // Don't autoplay when page is not visible
      scrollNext();
    };

    // Set up the interval for autoplay
    const interval = setInterval(autoplay, AUTOPLAY_INTERVAL);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [emblaApi, isMobile, scrollNext]);

  // Handle window resize to detect mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on mount
    checkIfMobile();
    
    // Add event listener for resize
    window.addEventListener("resize", checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Pause autoplay on user interaction
  const onMouseEnter = useCallback(() => {
    // This will be used if we want to pause on hover
    // We could set a state here to pause the autoplay
  }, []);

  const onMouseLeave = useCallback(() => {
    // Resume autoplay when mouse leaves
  }, []);

  // Service cards data
  const serviceCards = [
    {
      icon: <Globe className="w-6 h-6 text-[#FD6F00] group-hover:text-white transition-colors duration-300" />,
      title: "Sites Institucionais",
      description: "Presença online profissional",
      content: "Desenvolvimento de sites para empresas, negócios locais ou marcas pessoais com design moderno.",
      link: "https://wa.me/5511951783281?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20Sites%20Institucionais"
    },
    {
      icon: <MousePointerClick className="w-6 h-6 text-[#FD6F00] group-hover:text-white transition-colors duration-300" />,
      title: "Landing Pages",
      description: "Captação de leads e vendas",
      content: "Páginas otimizadas para captar clientes ou vender produtos de forma eficiente, com foco em conversão.",
      link: "https://wa.me/5511951783281?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20Landing%20Pages"
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-[#FD6F00] group-hover:text-white transition-colors duration-300" />,
      title: "Lojas Virtuais",
      description: "Venda online simplificada",
      content: "Criação de e-commerces completos com integração de pagamentos, gestão de estoque e logística.",
      link: "https://wa.me/5511951783281?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20Lojas%20Virtuais"
    },
    {
      icon: <LayoutDashboard className="w-6 h-6 text-[#FD6F00] group-hover:text-white transition-colors duration-300" />,
      title: "Aplicações Web",
      description: "Sistemas personalizados",
      content: "Plataformas sob medida como agendamentos e painéis administrativos para seu negócio.",
      link: "https://wa.me/5511951783281?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20Aplicações%20Web"
    }
  ];

  // Render a service card
  const renderCard = (service: {
    icon: React.ReactNode;
    title: string;
    description: string;
    content: string;
    link: string;
  }, index: number) => (
    <Card 
      key={index}
      className={cn(
        "bg-[#222222] border-none shadow-lg flex flex-col items-center text-center p-3 hover:scale-105 transition-transform duration-300 group w-full max-w-[280px] mx-auto h-[100%]",
        isMobile && "mx-4" // Add horizontal margin in mobile carousel
      )}
    >
      <CardHeader className="flex flex-col items-center py-1.5 px-2 space-y-1.5 w-full">
        <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center group-hover:bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] transition-colors duration-300">
          {service.icon}
        </div>
        <CardTitle className="text-xl font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900]">
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardDescription className="text-sm text-white -mt-1 mb-0.5">
        {service.description}
      </CardDescription>
      <CardContent className="text-base py-1 px-3 w-full">
        <p className="text-white">
          {service.content}
        </p>
      </CardContent>
      <CardFooter className="mb-4 w-full">
        <Button
          asChild
          variant="default"
          className="w-full bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] hover:opacity-90 transition-opacity hover:scale-110 duration-300"
        >
          <Link
            href={service.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Saiba mais
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
  return (
    <section className="w-full flex justify-center">
      <div className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%]">
        {/* Mobile Carousel */}
        {isMobile ? (
          <div 
            className="relative" 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {serviceCards.map((service, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 first:pl-0">
                    {renderCard(service, index)}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Navigation Buttons */}
            <button 
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#222222] rounded-full p-2 shadow-md z-10"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-6 h-6 text-[#FD6F00]" />
            </button>
            <button 
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-[#222222] rounded-full p-2 shadow-md z-10"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-6 h-6 text-[#FD6F00]" />
            </button>
          </div>
        ) : (
          /* Desktop Grid Layout */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
            {serviceCards.map((service, index) => renderCard(service, index))}
          </div>
        )}
      </div>
    </section>
  );
}
