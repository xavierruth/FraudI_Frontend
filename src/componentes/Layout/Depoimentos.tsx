import Image from "next/image";
import { depoimentos } from "@/constants";

export default function DepoimentosSection() {
  return (
    <section className="max-w-full h-auto items-center justify-center bg-teal-50 py-16 px-2 sm:px-8 lg:px-20">
      <div className="justify-center flex-col md:flex-row mx-auto">
        <h2 className="font-serif text-center text-teal-500 text-xl sm:text-2xl font-semibold">
          Depoimentos
        </h2>
        <h3 className="font-sans text-center text-teal-900 text-xl sm:text-3xl font-bold mt-2">
          Quem já usou, recomenda
        </h3>
        <p className="font-sans text-center max-w-4xl mx-auto mt-4 text-slate-600 text-base sm:text-lg">
          Veja o que dizem pessoas que já passaram pela experiência de quase cair em golpes. <br />
          O Fraudi ajudou a identificar riscos e trouxe mais segurança para o uso do cartão no dia a dia.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-4 md:px-8 max-w-7xl justify-center mx-auto">
        {depoimentos.map((depoimento, index) => (
          <div
            key={index}
            className="bg-white border border-teal-300 rounded-lg p-5 shadow-sm hover:shadow-md hover:scale-[1.01] hover:border-teal-500 transition-all duration-300 ease-in-out">
            <div className="flex items-start gap-4 mb-4">
              <Image
                src={depoimento.image}
                alt={`Foto de ${depoimento.user}`}
                width={48}
                height={48}
                className="w-12 h-12 rounded-xl border border-teal-300 object-cover"
              />
              <div className="font-sans text-base">
                <p className="font-bold text-teal-600">{depoimento.user}</p>
                <p className="text-[13px] text-gray-600 leading-tight">
                  {depoimento.cargo} <br />
                  {depoimento.time}
                </p>
              </div>
            </div>
            <p className="font-sans text-sm text-teal-800 leading-relaxed">
              {depoimento.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
