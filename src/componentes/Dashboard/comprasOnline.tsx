import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  import { Card, CardContent } from "@/componentes/UI/card";
  import { useFraudeData } from "@/componentes/Dashboard/useFraudeData";
  
  const cores = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  
  interface Props {
    atualizar: number;
  }
  
  export default function ComprasOnline({ atualizar }: Props) {
    const { dadosCompraOnline } = useFraudeData(atualizar);
  
    const total = dadosCompraOnline.reduce((acc, item) => acc + item.valor, 0);
  
    return (
      <Card className="h-full  w-full">
        <CardContent className="h-[500] flex flex-col">
          <h2 className="font-sans text-xl font-medium text-teal-900 mb-4">Compras Online</h2>
          
          {/* Legenda personalizada */}
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {dadosCompraOnline.map((item, index) => {
              const porcentagem = ((item.valor / total) * 100).toFixed(1);
              return (
                <div key={index} className="flex justify-center items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: cores[index % cores.length] }}
                  />
                  <span className="text-sm font-medium">{item.nome}:</span>
                  <span className="text-sm text-gray-700 font-semibold">
                    {item.valor} ({porcentagem}%)
                  </span>
                </div>
              );
            })}
          </div>
  
          {/* Gráfico */}
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dadosCompraOnline}
                  dataKey="valor"
                  nameKey="nome"
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  label
                >
                  {dadosCompraOnline.map((entry, index) => (
                    <Cell
                      key={`online-${index}`}
                      fill={cores[index % cores.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number, name: string) => [
                    `${value} compras`,
                    name,
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    );
  }
  