import Login from "@/assets/imgs/Imagem_login.png";
import Image from "next/image";
//import Cadastro from "../../../assets/imgs/Imagem_cadastro.png"; 



export default function ContainerImage () {
    return( 
        <div className="h-full w-full relative overflow-hidden"> 
            <Image 
            src={Login} 
            alt="Imagem de login" 
            className="w-full h-full object-cover"/> 
        </div>
    );
};