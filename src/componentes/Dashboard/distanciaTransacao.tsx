import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/componentes/UI/card";
import { useFraudeData } from "@/componentes/Dashboard/useFraudeData";
import ComprasOnline from "./comprasOnline";
interface Props {
  atualizar: number;
}

export default function DistanciaTransacao({ atualizar }: Props) {
  const { dadosDistanciaUltimaTransacao, dadosFraude } =
    useFraudeData(atualizar);

  const totalFraudes = dadosFraude.find((d) => d.nome === "Fraude")?.valor || 0;
  const totalNaoFraudes =
    dadosFraude.find((d) => d.nome === "Não é Fraude")?.valor || 0;
    
  const mediaDistancia = (
    dadosDistanciaUltimaTransacao.reduce(
      (acc, item) => acc + (item.mediaDistanciaCasa ?? 0),
      0
    ) / dadosDistanciaUltimaTransacao.length
  ).toFixed(2);

  return (
    <div className="w-full mx-auto text-teal-700 grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
      {/* Indicadores em linha ocupando col-span-2 */}
      <div className="flex flex-col lg:col-span-2">
        <div className="flex flex-col sm:flex-row gap-4">
          <Card className="flex-1">
            <CardContent className="p-4">
              <p className="font-sans text-xl font-medium text-teal-900">Total de Fraudes</p>
              <p className="font-sans font-normal text-red-600 text-lg">{totalFraudes}</p>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardContent className="p-4">
              <p className="font-sans text-xl font-medium text-teal-900">Total de Não Fraudes</p>
              <p className="font-sans font-normal text-green-600 text-lg">
                {totalNaoFraudes}
              </p>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardContent className="p-4">
              <p className="font-sans text-xl font-medium text-teal-900">Média Distância da Casa</p>
              <p className="font-sans font-normal text-blue-600 text-lg">
                {mediaDistancia} km
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Gráfico principal */}
        <Card className="mt-4">
          <CardContent className="p-4 h-96 flex flex-col">
            <h2 className="font-sans text-xl font-medium text-teal-900 mb-3">
              Realção da distância da útlima transação com a fraude
            </h2>
            <div className="flex-1 relative">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dadosDistanciaUltimaTransacao}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="faixa"
                    label={{
                      value: "Faixas de distância entre transações (km)",
                      position: "insideBottom",
                      offset: -5,
                    }}
                  />
                  <YAxis
                    label={{
                      value: "Distância (km)",
                      angle: -90,
                      position: "insideLeft",
                    }}
                    tickFormatter={(value) => `${value} km`}
                  />
                  <Tooltip
                    formatter={(value: number, name: string) => [
                      `${value.toFixed(1)} km`,
                      name,
                    ]}
                  />
                  <Line
                    type="monotone"
                    dataKey="fraude"
                    stroke="#FF0000"
                    name="Fraudes"
                  />
                  <Line
                    type="monotone"
                    dataKey="naoFraude"
                    stroke="#00C49F"
                    name="Não Fraudes"
                  />
                  <Line
                    type="monotone"
                    dataKey="mediaDistanciaCasa"
                    stroke="#0000FF"
                    strokeDasharray="5 5"
                    name="Média Distância da Casa"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Espaço reservado para outro gráfico */}
      <div className="lg:col-span-1 h-full">
        {/* Você pode adicionar outro Card aqui depois */}
        <div className="h-full w-full bg-gray-100 rounded-xl border-teal-300 flex items-center justify-center text-teal-700">
          <ComprasOnline atualizar={atualizar} />
        </div>
      </div>
    </div>
  );
}
