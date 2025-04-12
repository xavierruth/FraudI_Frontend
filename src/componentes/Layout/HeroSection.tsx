'use client'

import { BTNPrimary } from "../UI/Buttons";
import Image from "next/image";
import ImgHome from "@/assets/imgs/Imagem_Home.png"
import { useRouter } from "next/navigation";

export default function HeroSection() {

    const router = useRouter(); 
    
    const handlecadastro = () => {
      router.push("/cadastro")
    }

    return(
            <section className="w-full h-auto flex flex-col-reverse md:flex-row items-center justify-center bg-teal-900 pb-4 md:pb-0">
                <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
            
                    {/* Texto à esquerda */}
                    <div className=" text-white flex-col md:flex-row items-center md:items-start gap-6 px-4 md:px-0 text-center md:text-left">
                        <h1 className="font-sans text-3xl md:text-5xl font-bold leading-tight">
                            Transforme <br />
                            insegurança em <br />
                            confiança com o Fraudi
                        </h1>
                        <p className="w-md font-sans mt-4 text-xl md:text-lg text-[#E0F2F1]">
                            O Fraudi analisa riscos, prevê fraudes e protege você com um clique.<br />
                            Teste agora e <span className="text-lime-500 italic font-medium">sinta a diferença.</span>
                        </p>

                        {/* botão primário */}
                        <div className="mt-6">
                                <BTNPrimary type="button" onClick={handlecadastro}>
                                    <a href="#">Cadastre-se agora!</a>
                                </BTNPrimary>
                            </div>
                        </div>
                    </div>


            {/* Imagem à direita */}
            <div className="w-full md:w-1/2 mask-l-from-70% mask-b-from-40%">
                <Image src={ImgHome} alt="Homem sorrindo com notebook" className="object-cover w-full h-auto" priority/>
            </div>
        </section>
  );
};
