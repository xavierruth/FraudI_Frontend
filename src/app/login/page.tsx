import ContainerImage from "@/componentes/Layout/ContainerImg";
import LoginForm from "@/componentes/UI/LoginForm";

export default function Login() {
    return(
        <>
            <div className="flex h-screen w-screen">
                <div className= " w-full md:w-1/2 md:h-full">
                    <ContainerImage />  
                </div>
                <div className="w-full md:w-1/2 bg-white h-full flex items-center justify-center">
                    <LoginForm /> 
                </div>
            </div>
    </>
    )
    
}
