import { FileText, Search, LineChart } from "lucide-react"; 



import user1 from "@/assets/testimonial-img/user1.png"
import user2 from "@/assets/testimonial-img/user2.png"
import user3 from "@/assets/testimonial-img/user3.jpg"
import user4 from "@/assets/testimonial-img/user4.png"
import user5 from "@/assets/testimonial-img/user5.png"
import user6 from "@/assets/testimonial-img/user6.png"
import user7 from "@/assets/testimonial-img/user7.png"
import user8 from "@/assets/testimonial-img/user8.png"
import user9 from "@/assets/testimonial-img/user9.png"

export const NavItem = [

    {label: "Início", href: "#inicio"},
    {label: "Serviços", href: "#servicos"}, 
    {label: "Depoimentos", href: "#depoimentos"},
];

export const servicos = [

    {
        icon: <FileText />,
        title: "Formulário de Detecção Rápida",
        desc: "Basta preencher um pequeno formulário com informações como bairro, cidade e comportamento de compra. O Fraudi cruza os dados com nossa base e retorna um resultado confiável, rápido e fácil de entender.",

    },
    {
        icon: <Search />,
        title: "Predição Inteligente de Fraudes",
        desc: "Nosso sistema analisa os dados do formulário para identificar padrões suspeitos com base em variáveis como distância da última transação, uso do chip, loja online e mais. Você descobre se há risco antes do prejuízo acontecer.",

    },
    {
        icon: <LineChart />,
        title: "Dashboard de Visualização",
        desc: "Acompanhe os dados em tempo real com nosso painel intuitivo. Veja insights sobre fraudes na sua região, transações suspeitas e contribuições da comunidade.",

    },
];

export const depoimentos = [

    {
        user: "Carlos Campos",
        cargo: "Desenvolvedor de Software",
        time: "Cliente há 1 ano", 
        image: user1,  
        text: "Segurança é tudo no mundo digital. O Fraudi me deu mais confiança para continuar usando cartão, sabendo que estou protegido por inteligência de verdade.",
    }, 
    {
        user: "Beatriz Nader",
        cargo: "Cineasta",
        time: "Cliente há 11 meses",  
        image: user2,  
        text: "Adorei a proposta! É muito mais do que denunciar um golpe é contribuir com uma base de dados que ajuda outras pessoas a não passarem pelo mesmo.",
    }, 
    {
        user: "Allan Marques",
        cargo: "Desenvolvedor FullStack",
        time: "Cliente há 10 meses",  
        image: user3,  
        text: "O Fraudi me deu autonomia. Eu me senti no controle da situação, e isso fez toda diferença na hora de resolver o problema com meu cartão.",
    }, 
    {
        user: "Lucas Teixeira",
        cargo: "Desenvolvedor Front-end", 
        time: "Cliente há 9 meses", 
        image: user4,  
        text: "Depois que comecei a usar o Fraudi, até minha relação com o banco melhorou. Agora sei como identificar e agir rápido. ",
    }, 
    {
        user: "Lucas Rodrigues",
        cargo: "Designer",
        time: "Cliente há 8 meses",  
        image: user5,  
        text: "Fui vítima de um golpe com valor pequeno, mas o Fraudi mostrou que esses pequenos casos fazem parte de algo maior. ",
    }, 
    {
        user: "Malu Medeiros",
        cargo: "Desenvolvedora Front-end", 
        time: "Cliente há 7 meses", 
        image: user6,  
        text: "Achei incrível poder contribuir com dados e ainda ser ajudada! Preenchi o formulário e logo entendi o padrão do golpe que sofri. Me senti parte de uma comunidade.",
    }, 
    {
        user: "Bárbara Leimig",
        cargo: "Desenvolvedora FullStack",
        time: "Cliente há 6 meses",  
        image: user7, 
        text: "Já tinha perdido a esperança de entender o que aconteceu com minha fatura. Com o Fraudi, consegui visualizar tudo com clareza. Recomendo pra todo mundo!",
    }, 
    {
        user: "Marina Barros",
        cargo: "Arqueóloga", 
        time: "Cliente há 5 meses", 
        image: user8, 
        text: "Preenchi o formulário achando que seria só mais um. Em poucos minutos, recebi uma análise super clara. Descobri que minha compra suspeita era, sim, uma tentativa de golpe. O Fraudi me salvou!",
    }, 
    {
        user: "José Sávio",
        cargo: "Desenvolvedor FullStack", 
        time: "Cliente há 4 meses", 
        image: user9, 
        text: "O Fraudi é simples, direto e eficiente. Pela primeira vez senti que alguém realmente estava me ouvindo quando relatei o golpe que sofri.",
    }, 
];

export const Footer = [

    {
        title: "Saiba Mais",
        items: [
            {
                title: "Repositório Frontend", 
                href: "https://github.com/xavierruth/FraudI_Frontend",
            },
            {
                title: "Repositório Backend", 
                href: "https://github.com/xavierruth/FraudI-Backend",
            },
            {
                title: "Google Colab", 
                href: " # ",
            },
        ],
    },
    {
        title: "Equipe", 
        items: [
            {
                title: "Juliane Reis Maia", 
                href: "https://www.linkedin.com/in/julianereism/",
            },
            {
                title: "Ruth Xavier", 
                href: "https://www.linkedin.com/in/ruthxavier/",
            }
        ]
    }
]

