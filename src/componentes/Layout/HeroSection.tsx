import { BTNPrimary } from "../UI/Buttons";
import Image from "next/image";
import ImgHome from "@/assets/imgs/Imagem_Home.png"

export default function HeroSection() {
    return(
            <section className="w-full h-auto flex items-center justify-center bg-[#0F3D3E]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            
                    {/* Texto à esquerda */}
                    <div className=" text-white">
                        <h1 className="font-sans text-5xl font-bold leading-tight">
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
                                <BTNPrimary type="button">
                                    <a href="#">Cadastre-se agora!</a>
                                </BTNPrimary>
                            </div>
                        </div>
                    </div>


            {/* Imagem à direita */}
            <div className="w-full md:w-1/2">
                <Image src={ImgHome} alt="Homem sorrindo com notebook" className="object-cover w-full h-auto" priority/>
            </div>
        </section>
  );
};
