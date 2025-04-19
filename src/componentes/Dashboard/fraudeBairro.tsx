import {
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { Card, CardContent } from "@/componentes/UI/card";
import { useFraudeData } from "@/componentes/Dashboard/useFraudeData";

interface Props {
  atualizar: number;
}

export default function FraudeBairro({ atualizar }: Props) {
  const { dadosFraudePorBairro } = useFraudeData(atualizar);
  const CustomYAxisTick = ({ x, y, payload }: any) => {
    return (
      <text
        x={x}
        y={y}
        dy={4}
        textAnchor="end"
        fill="#666"
        fontSize={12}
        transform="translate(-10,0)"
      >
        {payload.value.length > 20
          ? `${payload.value.slice(0, 20)}...` // corta nomes longos
          : payload.value}
      </text>
    );
  };
  

  return (
    <div className="text-teal-700 grid grid-cols-1 gap-6 justify-center">
      <Card className="w-full h-auto mx-auto">
        <CardContent className="p-4 h-96">
          <h2 className="font-sans text-xl font-medium text-teal-900 mb-2">Fraudes por Bairro</h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={dadosFraudePorBairro}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 80, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis
                type="category"
                dataKey="bairro"
                width={50}
                tick={<CustomYAxisTick />}
                interval={0}
              />
              <Tooltip />
              <Legend
                verticalAlign="top"
                wrapperStyle={{ paddingBottom: "10px" }}
                formatter={() => "Quantidade de Fraudes"}
              />
              <Bar
                dataKey="valor"
                fill="#00C49F"
                name="Quantidade de Fraudes"
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
