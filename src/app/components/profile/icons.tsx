import { Button } from "@/components/ui/button";
import {
  Download,
  Linkedin,
  Github,
  Instagram,
  PhoneForwarded ,
} from "lucide-react";
import Link from "next/link";

export function Icons() {
  return (
    <div className="flex flex-col items-center lg:items-start gap-4 mt-6">
      <div className="flex gap-4">
        <Link
          href="https://www.linkedin.com/in/nicollas-mendes-dias-871357303/"
          target="_blank"
        >
          <Linkedin className="w-10 h-10 sm:w-[50px] sm:h-[50px] text-white border-2 border-white rounded-full p-2 hover:bg-blue-100 hover:text-black" />
        </Link>

        <Link href="https://github.com/NicollasMDs7" target="_blank">
          <Github className="w-10 h-10 sm:w-[50px] sm:h-[50px] text-white border-2 border-white rounded-full p-2 hover:bg-blue-100 hover:text-black" />
        </Link>

        <Link
          href="https://www.instagram.com/nicollasmendes.dev/"
          target="_blank"
        >
          <Instagram className="w-10 h-10 sm:w-[50px] sm:h-[50px] text-white border-2 border-white rounded-full p-2 hover:bg-blue-100 hover:text-black" />
        </Link>
      </div>

      <div className="flex gap-8 mt-4">
        <div>
          <a
            href="https://wa.me/5511951783281?text=Ol%C3%A1%20Nick%2C%20vim%20pelo%20portf%C3%B3lio%20e%20gostaria%20de%20realizar%20um%20or%C3%A7amento!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-[180px] h-[45px] bg-white text-black border-2
             border-white rounded-full cursor-pointer hover:bg-gradient-to-r hover:from-[#984300] 
             hover:via-[#FD6F00] hover:to-[#CA5900] hover:text-white ">
              <PhoneForwarded  />
              Entre em contato
            </Button>
          </a>
        </div>
        <div>
          <a
            href="https://drive.google.com/uc?export=download&id=1jLUuPKxCod23WP6ae7hN-NiDlF6ivxx1"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
           <Button className="w-[180px] h-[45px] bg-white text-black border-2 border-white rounded-full cursor-pointer
            hover:bg-gradient-to-r hover:from-[#984300] hover:via-[#FD6F00] hover:to-[#CA5900]
             hover:text-white">

              <Download className="mr-2" />
              Baixar CV
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
