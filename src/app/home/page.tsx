import NavMenu from "@/componentes/Layout/Navbar";
import HeroSection from "@/componentes/Layout/HeroSection";
import Depoimentos from "@/componentes/Layout/Depoimentos";


export default function Home() {
    return(
        <>
            <NavMenu />
            <HeroSection />
            
            <Depoimentos />

        </>
   )
}