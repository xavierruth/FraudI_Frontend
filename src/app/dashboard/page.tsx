"use client";
import { BTNPrimary } from "@/componentes/UI/Buttons";
import { Modal } from "@/componentes/UI/Modal";
import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import FormPredicao from "@/componentes/Layout/FormPredicao";
import { NavDash } from "@/componentes/Layout/Navbar";
import { buscarTransacoes } from "@/service/fraudeservice";
import FraudeBairro from "@/componentes/Dashboard/fraudeBairro";
import DistanciaTransacao from "@/componentes/Dashboard/distanciaTransacao";
import UsoChipFraudes from "@/componentes/Dashboard/usoChip";

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
      <div className=" w-full min-h-screen bg-white p-10 text-center text-amber-900">
        <div className="mb-4">
          <div className="mb-4">
            <BTNPrimary onClick={() => setshowModal(true)}>
              <Plus />
              Nova Consulta
            </BTNPrimary>
          </div>
          <DistanciaTransacao atualizar={contadorAtualizacao} />
          <div className="flex w-full gap-4">
            <div className="w-8/12">
              <FraudeBairro atualizar={contadorAtualizacao} />
            </div>
            <div className="w-4/12 flex">
              <UsoChipFraudes atualizar={contadorAtualizacao} />
            </div>
          </div>
        </div>
        <Modal isVisible={showModal} onClose={() => setshowModal(false)}>
          <FormPredicao
            formData={formData}
            setFormData={setFormData}
            onSubmit={async () => {
              await carregarDados(); // Atualiza os dados
              setContadorAtualizacao((prev) => prev + 1); // Gatilho para atualizar o gráfico
              setshowModal(false); // Fecha o modal
            }}
          />
        </Modal>
      </div>
    </>
  );
}
