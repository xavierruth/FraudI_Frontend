import { ChangeEvent, FormEvent } from "react";
import { InputField } from "../UI/Input";
import { SelectField } from "../UI/Select";
import { FieldItem } from "@/constants";
import { BTNPrimary } from "../UI/Buttons";
import { ArrowRight } from "lucide-react";
import { enviarTransacaoFraude } from "@/service/fraudeservice";
import Swal from "sweetalert2";


type FormTransacao = {
    compraOnline: string;
    distanciaCasa: string;
    distanciaUltimaTransacao: string;
    lojaRepetida: string;
    razaoMediaCompras: string;
    usoChip: string;
    usoCodigoSeguranca: string;
    fraude: string;
    cidade: string;
    bairro: string;
  };

type FormPredicaoProps = {
  formData: FormTransacao;
  setFormData: React.Dispatch<React.SetStateAction<FormTransacao>>;
  onSubmit: () => void;
};


export default function FormPredicao({
  formData,
  setFormData,
  onSubmit,
}: FormPredicaoProps) {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    const dadosFormatados = {
      'compra-online': formData.compraOnline,
      'distancia-casa': formData.distanciaCasa,
      'distancia-ultima-transacao': formData.distanciaUltimaTransacao,
      'loja-repetida': formData.lojaRepetida,
      'razao-media-compras': formData.razaoMediaCompras,
      'uso-chip': formData.usoChip,
      'uso-codigo-seguranca': formData.usoCodigoSeguranca,
      fraude: formData.fraude,
      cidade: formData.cidade,
      bairro: formData.bairro,
    }
  
    try {
      const resposta = await enviarTransacaoFraude(dadosFormatados);
  
      // 🔍 Verifica o valor retornado pelo backend
      const isFraude = resposta.risco_fraude_previsto === 1;
  
      Swal.fire({
        title: isFraude ? '🚨 Fraude Detectada!' : '✅ Transação Segura',
        text: isFraude
          ? 'A transação foi identificada como FRAUDE.'
          : 'A transação NÃO é uma fraude.',
        confirmButtonText: 'OK',
      });
  
      setFormData({
        compraOnline: "",
        distanciaCasa: "",
        distanciaUltimaTransacao: "",
        lojaRepetida: "",
        razaoMediaCompras: "",
        usoChip: "",
        usoCodigoSeguranca: "",
        fraude: "",
        cidade: "",
        bairro: ""
      });
  
      onSubmit(dadosFormatados);
  
    } catch (error) {
      console.error("Erro ao enviar transação", error);
      alert("Erro ao enviar transação, tente novamente.")
    }
  };
  
  

  return (
    <form onSubmit={handleSubmit}>
      {FieldItem.map((field) =>
        field.kind === "input" ? (
          <InputField
            key={field.name}
            label={field.label}
            name={field.name as keyof FormTransacao}
            type={field.type || "text"}
            value={formData[field.name as keyof FormTransacao]}
            onChange={handleChange}
            placeholder={field.placeholder}
            required
          />
        ) : (
          <SelectField
            key={field.name}
            label={field.label}
            name={field.name as keyof FormTransacao}
            value={formData[field.name as keyof FormTransacao]}
            onChange={handleChange}
            placeholder={field.placeholder}
            required
          />
        )
      )}
      <div className="mt-6 flex w-full justify-center items-center">
        <BTNPrimary>
          <div className="flex w-full justify-center items-center">
            Enviar
          </div>
          <div className="flex justify-end items-end">
            <ArrowRight />
          </div>
        </BTNPrimary>
      </div>
      
    </form>
  );
}
