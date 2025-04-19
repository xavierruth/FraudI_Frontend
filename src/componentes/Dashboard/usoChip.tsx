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
  
  export default function UsoChipFraudes({ atualizar }: Props) {
    const { dadosFraudePorUsoChip } = useFraudeData(atualizar); // Certifique-se de que isso retorna os dados corretos
  
    return (
        <Card className="text-teal-700 col-span-2 w-full mx-auto">
          <CardContent className="p-4 h-96 w-full">
            <h2 className="font-sans text-xl font-medium text-teal-900 mb-2">
              Fraudes por Uso de Chip
            </h2>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dadosFraudePorUsoChip}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="usoChip" />
                <YAxis />
                <Tooltip />
                <Legend
                  verticalAlign="top"
                  wrapperStyle={{ paddingBottom: "10px" }}
                  formatter={() => "Quantidade de Fraudes"}
                />
                <Bar
                  dataKey="fraudes"
                  fill="#00C49F"
                  name="Quantidade de Fraudes"
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
    );
  }
  