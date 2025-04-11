import Image from "next/image";
import { depoimentos } from "@/constants";

export default function Depoimentos() {
  return (
    <section className="bg-[#e8f6f5] py-16 px-2 sm:px-8 lg:px-20 items-center">
      <h2 className="font-serif text-center text-[#00473e] text-2xl sm:text-3xl font-semibold">
        Depoimentos
      </h2>
      <h3 className="font-sans text-center text-[#001B17] text-xl sm:text-2xl font-bold mt-2">
        Quem já usou, recomenda
      </h3>
      <p className="font-sans text-center max-w-4xl mx-auto mt-4 text-gray-700 text-base sm:text-lg">
        Veja o que dizem pessoas que já passaram pela experiência de quase cair em golpes. <br />
        O Fraudi ajudou a identificar riscos e trouxe mais segurança para o uso do cartão no dia a dia.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {depoimentos.map((depoimento, index) => (
          <div
            key={index}
            className="bg-white border border-[#b6e5e0] rounded-lg p-5 shadow-sm"
          >
            <div className="flex items-start gap-4 mb-4">
              <Image
                src={depoimento.image}
                alt={`Foto de ${depoimento.user}`}
                width={48}
                height={48}
                className="w-12 h-12 rounded-xl border border-[#11BFAB] object-cover"
              />
              <div className="font-sans text-base">
                <p className="font-bold text-[#05453D]">{depoimento.user}</p>
                <p className="text-[13px] text-gray-600 leading-tight">
                  {depoimento.cargo} <br />
                  {depoimento.time}
                </p>
              </div>
            </div>
            <p className="text-sm text-[#05453D] leading-relaxed">
              {depoimento.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
