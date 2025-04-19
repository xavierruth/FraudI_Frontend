import api from './api'

export interface DadosTransacao {
    'compra-online': string | number
    'distancia-casa': string | number
    'distancia-ultima-transacao': string | number
    'loja-repetida': string | number
    'razao-media-compras': string | number
    'uso-chip': string | number
    'uso-codigo-seguranca': string | number
    fraude: string | number
    cidade: string
    bairro: string
}

export const enviarTransacaoFraude = async (dados: DadosTransacao) => {
    const formData = new FormData()

    Object.entries(dados).forEach(([key, value]) => {
        formData.append(key, value)
    })

    const response = await api.post('/api/fraude', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })

    return response.data
}

export const buscarTransacoes = async () => {
    try {
        const response = await api.get("/api/fraude/dados");
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar transações:", error);
        return [];
    }
}