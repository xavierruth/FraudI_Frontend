import Image from "next/image";
import ImgAbout from "@/assets/imgs/Team work-bro.png";

export default function SobreSection () {
    return(
        <section className="py-12 px-4 md:px-16 bg-teal-50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 text-pretty md:text-balance">
                <div className="w-full md:w-1/2">
                {/* Imagem à esquerda */}
                    <Image src={ImgAbout} alt="teamwork" className="object-cover w-full h-auto" priority />
                </div>

                {/* Texto à direita */}
                <div className="w-full md:w-1/2"> 
                    <div className="">
                        <h2 className="font-serif text-teal-500 text-xl sm:text-2xl font-semibold mb-12">Sobre Nós</h2>
                        <h3 className="font-sans text-wrap text-teal-900 text-xl sm:text-3xl font-bold leading-snug mb-4 mt-2">Nossa história começa com um 
                            <br className="hidden md:block" /> problema <span className="italic">real</span></h3>
                        <p className="font-sans text-slate-600 max-w-4xl mx-auto mt-4 text-gray-800 text-base sm:text-lg  leading-relaxed">
                        Fraudes com cartão de crédito são mais comuns do que deveriam e, muitas vezes, só percebemos quando já é tarde demais. 
                        <span className="italic text-emerald-800 font-medium"> O Fraudi nasceu da vontade de mudar isso. </span>
                        Criamos uma ferramenta acessível, com tecnologia preditiva e visual simples, para que qualquer pessoa possa identificar riscos antes que virem prejuízo. 
                        </p>
                        <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed"> 
                        Mais do que um sistema de prevenção, o <span className="font-medium text-emerald-800">Fraudi</span> é um aliado para quem quer usar o cartão com mais segurança e tranquilidade no dia a dia. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}