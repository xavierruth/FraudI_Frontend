import NavMenu from "@/componentes/Layout/Navbar";
import HeroSection from "@/componentes/Layout/HeroSection";
import SobreSection from "@/componentes/Layout/Sobre";
import ServicosSection from "@/componentes/Layout/Servicos";
import DepoimentosSection from "@/componentes/Layout/Depoimentos";
import FooterSection from "@/componentes/Layout/Footer";


export default function Home() {
    return(
        <>
            <NavMenu />
            <HeroSection />
            <SobreSection />
            <ServicosSection />          
            <DepoimentosSection />
            <FooterSection />

        </>
   )
}