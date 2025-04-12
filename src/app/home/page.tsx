import NavMenu from "@/componentes/Layout/Navbar";
import HeroSection from "@/componentes/Layout/HeroSection";
import ServicosSection from "@/componentes/Layout/Servicos";
import DepoimentosSection from "@/componentes/Layout/Depoimentos";


export default function Home() {
    return(
        <>
            <NavMenu />
            <HeroSection />
            <ServicosSection />          
            <DepoimentosSection />

        </>
   )
}