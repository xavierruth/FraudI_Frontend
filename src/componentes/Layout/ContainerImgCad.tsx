import Cadastro from "@/assets/imgs/Imagem_cadastro.png";
import Image from "next/image";


export default function ContainerImgCad () {
    return(
        <div className="h-full w-full relative overflow-hidden"> 
        <Image 
        src={Cadastro} 
        alt="Imagem de login" 
        className="w-full h-full object-cover"/> 
    </div>

    );
}
