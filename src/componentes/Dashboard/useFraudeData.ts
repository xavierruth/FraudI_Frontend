import { useEffect, useState } from "react";
import { buscarTransacoes } from "@/service/fraudeservice";

type DadoSimples = { nome: string; valor: number };
type DadoRazao = { intervalo: string; qtd: number };
type DadoOnlineFraude = { comprasOnline: number; fraudes: number };

interface Transacao {
  "compra-online": number;
  uso_chip: number;
  fraude: number;
  "razao-media-compras": number;
  bairro?: string;
  "distancia-ultima-transacao": number;
  "distancia-casa": number;
  "uso_codigo_seguranca": number;
}

export function useFraudeData(atualizar: number) {
  const [dadosCompraOnline, setDadosCompraOnline] = useState<DadoSimples[]>([]);
  const [dadosUsoChip, setDadosUsoChip] = useState<DadoSimples[]>([]);
  const [dadosFraude, setDadosFraude] = useState<DadoSimples[]>([]);
  const [dadosRazaoMedia, setDadosRazaoMedia] = useState<DadoRazao[]>([]);
  const [dadosFraudePorOnline, setDadosFraudePorOnline] = useState<
    DadoOnlineFraude[]
  >([]);
  const [dadosFraudePorUsoChip, setDadosFraudePorUsoChip] = useState<
    { usoChip: string; fraudes: number }[]
  >([]);
  const [dadosFraudePorBairro, setDadosFraudePorBairro] = useState<
    DadoSimples[]
  >([]);
  const [dadosDistanciaUltimaTransacao, setDadosDistanciaUltimaTransacao] =
    useState<
      {
        faixa: string;
        fraude: number;
        naoFraude: number;
        mediaDistanciaCasa: number;
      }[]
    >([]);

  const [dadosDispersaoDistancias, setDadosDispersaoDistancias] = useState<{
    fraudes: { distanciaCasa: number; distanciaUltimaTransacao: number }[];
    naoFraudes: { distanciaCasa: number; distanciaUltimaTransacao: number }[];
  }>({ fraudes: [], naoFraudes: [] });

  const [dadosFraudePorCodigoSeguranca, setDadosFraudePorCodigoSeguranca] =
    useState<{ usoCodigo: string; fraudes: number }[]>([]);

  useEffect(() => {
    async function carregarDados() {
      try {
        const transacoes = await buscarTransacoes();

        // 📊 Gráfico de Compras Online
        const online = { sim: 0, nao: 0 };
        const usoChip = { sim: 0, nao: 0 };
        const fraude = { fraude: 0, normal: 0 };
        const razoes: number[] = [];

        // 📈 Gráfico de Área: Fraudes por compra online
        const agrupadoPorOnline: Record<number, number> = {}; // { qtdComprasOnline: qtdFraudes }

        transacoes.forEach((t: Transacao) => {
          if (t["compra-online"] === 1) online.sim += 1;
          else online.nao += 1;

          if (t["uso_chip"] === 1) usoChip.sim += 1;
          else usoChip.nao += 1;

          if (t["fraude"] === 1) fraude.fraude += 1;
          else fraude.normal += 1;

          if (t["razao-media-compras"]) razoes.push(t["razao-media-compras"]);

          // 👇 Agrupamento por qtd de compras online (aqui assumindo que é número absoluto por transação)
          const qtdComprasOnline = t["compra-online"];
          if (qtdComprasOnline !== undefined && t["fraude"] !== undefined) {
            agrupadoPorOnline[qtdComprasOnline] =
              (agrupadoPorOnline[qtdComprasOnline] || 0) +
              (t["fraude"] === 1 ? 1 : 0);
          }
          const bins: number[] = [0, 1, 2, 3, 5, 10, 20, 50, 100]; // você pode ajustar isso
          const histograma: Record<
            string,
            {
              fraude: number;
              naoFraude: number;
              somaDistanciaCasa: number;
              count: number;
            }
          > = {};

          bins.forEach((_, i) => {
            if (i < bins.length - 1) {
              const label = `${bins[i]}-${bins[i + 1]}`;
              histograma[label] = {
                fraude: 0,
                naoFraude: 0,
                somaDistanciaCasa: 0,
                count: 0,
              };
            }
          });

          transacoes.forEach((t: Transacao) => {
            const distancia = t["distancia-ultima-transacao"];
            const isFraude = t.fraude === 1;

            if (typeof distancia === "number") {
              for (let i = 0; i < bins.length - 1; i++) {
                if (distancia >= bins[i] && distancia < bins[i + 1]) {
                  const faixa = `${bins[i]}-${bins[i + 1]}`;
                  if (isFraude) histograma[faixa].fraude++;
                  else histograma[faixa].naoFraude++;

                  if (typeof t["distancia-casa"] === "number") {
                    histograma[faixa].somaDistanciaCasa += t["distancia-casa"];
                    histograma[faixa].count++;
                  }
                  break;
                }
              }
            }
          });
          const dispersao = transacoes
            .filter(
              (t: Transacao) =>
                typeof t["distancia-casa"] === "number" &&
                typeof t["distancia-ultima-transacao"] === "number"
            )
            .map((t: Transacao) => ({
              distanciaCasa: Math.log10(t["distancia-casa"] + 1),
              distanciaUltimaTransacao: Math.log10(
                t["distancia-ultima-transacao"] + 1
              ),
              fraude: t.fraude === 1,
            }));
          const dadosFraudes = dispersao.filter((d: DadoSimples) => d.valor);
          const dadosNaoFraudes = dispersao.filter((d: DadoSimples) => !d.valor);

          setDadosDispersaoDistancias({
            fraudes: dadosFraudes,
            naoFraudes: dadosNaoFraudes,
          });

          const dadosHistograma = Object.entries(histograma).map(
            ([faixa, valores]) => ({
              faixa,
              fraude: valores.fraude,
              naoFraude: valores.naoFraude,
              mediaDistanciaCasa:
                valores.count > 0
                  ? valores.somaDistanciaCasa / valores.count
                  : 0,
            })
          );

          setDadosDistanciaUltimaTransacao(dadosHistograma);
        });

        setDadosCompraOnline([
          { nome: "Online", valor: online.sim },
          { nome: "Não Online", valor: online.nao },
        ]);

        setDadosUsoChip([
          { nome: "Usou Chip", valor: usoChip.sim },
          { nome: "Não Usou Chip", valor: usoChip.nao },
        ]);

        setDadosFraude([
          { nome: "Fraude", valor: fraude.fraude },
          { nome: "Não é Fraude", valor: fraude.normal },
        ]);

        // 📈 Gráfico de Barras: razão média de compras
        const razaoAgrupada = [
          { intervalo: "0-0.5", qtd: 0 },
          { intervalo: "0.5-1", qtd: 0 },
          { intervalo: "1-2", qtd: 0 },
          { intervalo: "2+", qtd: 0 },
        ];

        razoes.forEach((r) => {
          if (r < 0.5) razaoAgrupada[0].qtd++;
          else if (r < 1) razaoAgrupada[1].qtd++;
          else if (r < 2) razaoAgrupada[2].qtd++;
          else razaoAgrupada[3].qtd++;
        });

        setDadosRazaoMedia(razaoAgrupada);

        // 📈 Novo: set para o gráfico de área
        const dadosConvertidos = Object.entries(agrupadoPorOnline)
          .map(([comprasOnline, fraudes]) => ({
            comprasOnline: Number(comprasOnline),
            fraudes,
          }))
          .sort((a, b) => a.comprasOnline - b.comprasOnline);

        setDadosFraudePorOnline(dadosConvertidos);

        const fraudePorBairro: Record<string, number> = {};

        transacoes.forEach((t: Transacao) => {
          const bairro = t.bairro || "Desconhecido";
          if (t.fraude === 1) {
            fraudePorBairro[bairro] = (fraudePorBairro[bairro] || 0) + 1;
          }
        });
        const fraudePorUsoChip = { sim: 0, nao: 0 };

        transacoes.forEach((t: Transacao) => {
          if (t.fraude === 1) {
            if (t.uso_chip === 1) fraudePorUsoChip.sim += 1;
            else fraudePorUsoChip.nao += 1;
          }
        });

        setDadosFraudePorUsoChip([
          { usoChip: "Usou Chip", fraudes: fraudePorUsoChip.sim },
          { usoChip: "Não Usou Chip", fraudes: fraudePorUsoChip.nao },
        ]);

        const fraudePorCodigoSeguranca = { usou: 0, naoUsou: 0 };

        transacoes.forEach((t: Transacao) => {
          if (t.fraude === 1) {
            if ((t)["uso_codigo_seguranca"] === 1)
              fraudePorCodigoSeguranca.usou += 1;
            else fraudePorCodigoSeguranca.naoUsou += 1;
          }
        });

        setDadosFraudePorCodigoSeguranca([
          { usoCodigo: "Usou Código", fraudes: fraudePorCodigoSeguranca.usou },
          {
            usoCodigo: "Não Usou Código",
            fraudes: fraudePorCodigoSeguranca.naoUsou,
          },
        ]);
        const dadosBairro = Object.entries(fraudePorBairro)
          .map(([bairro, valor]) => ({ bairro, valor })) // <- nome em vez de bairro
          .sort((a, b) => b.valor - a.valor);

        setDadosFraudePorBairro(dadosBairro);
      } catch (erro) {
        console.error("Erro ao buscar transações:", erro);
      }
    }

    carregarDados();
  }, [atualizar]);

  return {
    dadosCompraOnline,
    dadosUsoChip,
    dadosFraude,
    dadosRazaoMedia,
    dadosFraudePorOnline,
    dadosFraudePorBairro,
    dadosDistanciaUltimaTransacao,
    dadosDispersaoDistancias,
    dadosFraudePorUsoChip,
    dadosFraudePorCodigoSeguranca,
  };
}
