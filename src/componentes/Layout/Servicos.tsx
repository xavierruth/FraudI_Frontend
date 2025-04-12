import { servicos } from "@/constants"; // ajuste o path se necessário

export default function ServicosSection () {
  return (
    <section className="max-w-full h-auto items-center justify-center bg-white py-16 px-2 sm:px-8 lg:px-20">
      <div className="justify-center flex-col md:flex-row mx-auto">
        <h2 className="font-serif text-center text-xl md:text-2xl font-semibold text-teal-500 mb-12">Serviços</h2>
        <h3 className="font-sans text-center text-xl sm:text-3xl font-bold text-teal-900 mb-4">Como o Fraudi te protege</h3>
        <p className="font-sans text-slate-600 text-center max-w-4xl mx-auto mt-4 text-gray-700 text-base sm:text-lg mb-12">
          Com tecnologia preditiva e uma interface simples, o Fraudi identifica possíveis fraudes com base no seu comportamento de uso do cartão e te entrega tudo isso em um painel claro e acessível.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-4 md:px-8 max-w-7xl justify-center mx-auto">
          {servicos.map((servico, index) => (
            <div
              key={index}
              className="bg-white border border-teal-300 rounded-lg p-6 text-left hover:shadow-md hover:scale-[1.01] hover:border-[#11BFAB] transition-all duration-300 ease-in-out mx-auto">
            <div className="flex items-center justify-start mb-6">
                <div className="bg-teal-500 text-white rounded-full items-center p-2">
                    <div className="w-6 h-6 items-center justify-center">
                        {servico.icon}
                    </div>
                </div>
            </div>
              <h4 className="font-sans text-xl md:text-2xl font-semibold text-[#05453D] mb-2 leading-snug">{servico.title}</h4>
              <p className="font-sans text-[#05453D] text-base md:text-normal leading-relaxed">{servico.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

