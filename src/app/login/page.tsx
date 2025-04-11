import ContainerImage from "@/componentes/Layout/ContainerImg";
import Loginform from "@/componentes/UI/Input";

export default function Login() {
    return(
        <>
            <div className="flex h-screen w-screen">
                <div className="w-1/2 h-full">
                    <ContainerImage />  
                </div>
                <div className="w-1/2 bg-white h-full flex items-center justify-center">
                    <Loginform /> 
                    
                </div>
            </div>
    </>
    )
    
}
