import Image from "next/image";
import LogoFraudi from "@/assets/Logo/LOGO.svg"

export default function FooterSection () {
    return (
        <footer className="bg-teal-900 text-white py-10 px- md:px-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-8 md:mb-0">
              <Image
                src={LogoFraudi}
                alt="Logo Fraudi"
                className="w-16 h-16"
              />
              <span className="font-serif text-base md:text-3xl font-semibold">FraudI</span>
            </div>
    
            {/* Bloco de links alinhados à direita */}
            <div className="flex flex-col sm:flex-row gap-16 text-sm text-gray-200">
              {/* Saiba mais */}
              <div>
                <h4 className="font-sans text-sm md:text-base text-teal-50 font-semibold mb-4">Saiba mais</h4>
                <ul className="space-y-2">
                  <li><a href="https://github.com/xavierruth/FraudI_Frontend" className="font-sans text-xs md:text-sm no-underline hover:underline hover:text-emerald-300 active:text-purple-300">Repositório Front-end</a></li>
                  <li><a href="https://github.com/julianereism/back-predicao-python" className="font-sans text-xs md:text-sm no-underline hover:underline hover:text-emerald-300 active:text-purple-300">Repositório Back-end</a></li>
                  <li><a href="https://colab.research.google.com/drive/1_q7MiOiE1JG5Weo9ZduPAWjHiaCwSM2m#scrollTo=YKNO1yiSMOTb" className="font-sans text-xs md:text-sm no-underline hover:underline hover:text-emerald-300 active:text-purple-300">Google Colab</a></li>
                </ul>
              </div>
    
              {/* Equipe */}
              <div>
                <h4 className="font-sans text-sm md:text-base text-teal-50 font-semibold mb-4">Equipe</h4>
                <ul className="space-y-2">
                <li><a href="https://www.linkedin.com/in/julianereism/" className="font-sans text-xs md:text-sm no-underline hover:underline hover:text-emerald-300 active:text-purple-300">Juliane Reis - Gestão e Backend</a></li>
                <li><a href="https://www.linkedin.com/in/ruthxavier/" className="font-sans text-xs md:text-sm no-underline hover:underline hover:text-emerald-300 active:text-purple-300">Matheus Custódio - QA</a></li>
                <li><a href="https://www.linkedin.com/in/ruthxavier/" className="font-sans text-xs md:text-sm no-underline hover:underline hover:text-emerald-300 active:text-purple-300">Ruth Xavier - Design e Frontend</a></li>
                </ul>
              </div>
            </div>
          </div>

        < br />
          <hr className="border-t border-teal-700 my-8" />
    
          <div className="font-sans text-center text-sm font-light text-emerald-100">
            © 2025 <span className="font-serif text-lg font-medium">FraudI</span> — Protegendo você de fraudes com inteligência.
          </div>
        </footer>
      );
    
}