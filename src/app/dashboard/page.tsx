"use client";
import { BTNCTA } from "@/componentes/UI/Buttons";
import { Modal } from "@/componentes/UI/Modal";
import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import FormPredicao from "@/componentes/Layout/FormPredicao";
import { NavDash } from "@/componentes/Layout/Navbar";
import { buscarTransacoes } from "@/service/fraudeservice";
import FraudeBairro from "@/componentes/Dashboard/fraudeBairro";
import DistanciaTransacao from "@/componentes/Dashboard/distanciaTransacao";
import UsoChipFraudes from "@/componentes/Dashboard/usoChip";
import FooterSection from "@/componentes/Layout/Footer";

export default function Dashboard() {
  const [showModal, setshowModal] = useState(false);
  const [formData, setFormData] = useState({
    compraOnline: "",
    distanciaCasa: "",
    distanciaUltimaTransacao: "",
    lojaRepetida: "",
    razaoMediaCompras: "",
    usoChip: "",
    usoCodigoSeguranca: "",
    fraude: "",
    cidade: "",
    bairro: "",
  });
  const [contadorAtualizacao, setContadorAtualizacao] = useState(0);

  const carregarDados = async () => {
    try {
      const dados = await buscarTransacoes();
      console.log("Pré-carregamento de dados:", dados);
    } catch (error) {
      console.error("Erro ao buscar dados do gráfico:", error);
    }
  };

  useEffect(() => {
    carregarDados();
  }, []);

  return (
    <>
      <NavDash />
      <div className="w-full min-h-screen bg-teal-50 p-10 text-center">
        {/* Barra superior com título e botão */}
        <div className="flex items-center justify-between rounded-md bg-white border border-teal-100 px-6 py-4 mb-6">
          <h1 className="text-2xl font-semibold text-teal-900">Meu Dashboard</h1>
          <div className="flex"> 
          <BTNCTA onClick={() => setshowModal(true)}>
            <Plus className="mr-2" size={18} />
            Nova Consulta
          </BTNCTA>
          </div>
        </div>

        {/* Conteúdo principal */}
        <DistanciaTransacao atualizar={contadorAtualizacao} />
        <div className="flex w-full gap-4">
          <div className="w-8/12">
            <FraudeBairro atualizar={contadorAtualizacao} />
          </div>
          <div className="w-4/12 flex">
            <UsoChipFraudes atualizar={contadorAtualizacao} />
          </div>
        </div>

        {/* Modal de formulário */}
        <Modal isVisible={showModal} onClose={() => setshowModal(false)}>
          <FormPredicao
            formData={formData}
            setFormData={setFormData}
            onSubmit={async () => {
              await carregarDados();
              setContadorAtualizacao((prev) => prev + 1);
              setshowModal(false);
            }}
          />
        </Modal>
      </div>
      <FooterSection />
    </>
  );
}
