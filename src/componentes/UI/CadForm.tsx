'use client'

import { BTNPrimary, BTNText } from "@/componentes/UI/Buttons";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation"; 


export default function CadForm () {

    const router = useRouter(); 
  
    const handlehome = () => {
      router.push("/home")
    }
    
  return (
    <div className="bg-[#F8FEFD] w-full h-full flex flex-col items-center justify-center space-y-6">
      <div className="text-center">
        <h2 className="font-serif text-3xl font-bold text-teal-900 mb-2">
        Cadastre-se e se junte a nós!
        </h2>
        <p className="font-sans text-base font-normal text-slate-500">
            Vamos juntos tornar o uso do cartão mais seguro para todos.
        </p>
      </div>
      <div className="shadow-[0px_2px_17.8px_0px_rgba(17,191,171,0.20)] bg-white p-10 rounded-2xl w-xl h-auto">
        <form className="flex flex-col justify-between h-full">
          <div className="space-y-7 flex flex-col justify-center items-center">
          <div>
              <label htmlFor="text" className="block text-base font-semibold text-gray-700 mb-1">
                Qual o seu nome?
              </label>
              <input
                type="text"
                id="name"
                placeholder="Digite seu nome. Exemplo: Francisca Santos"
                className="w-md border border-gray-300 rounded-lg px-4 py-2 text-gray-800 transition-all focus:outline-teal-500 focus:text-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-1">
                Qual o seu e-mail?
              </label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu email. Ex: email@text.com.br"
                className="w-md border border-gray-300 rounded-lg px-4 py-2 text-gray-800 transition-all focus:outline-teal-500 focus:text-black"
              />
            </div>
            <div>
              <label htmlFor="senha" className="block text-base font-semibold text-gray-700 mb-1">
                Escolha uma senha
              </label>
              <input
                type="password"
                id="senha"
                placeholder="Digite sua senha aqui"
                className="w-md text-gray-800 border border-gray-300 rounded-lg px-4 py-2 transition-all focus:outline-teal-500 focus:text-black"
              />
            </div>
          </div>
          <div className="space-y-4 mt-10">
            <div className="space-y-3 flex flex-col items-center">
              <BTNPrimary type="submit">Cadastre-se</BTNPrimary>
            </div>
            <div className="flex justify-center">
              <BTNText type="button" onClick={handlehome}>
                <ArrowLeft />
                Voltar para o Site
              </BTNText>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
