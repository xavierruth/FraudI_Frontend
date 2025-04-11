import CadForm from "@/componentes/UI/CadForm";
import ContainerImgCad from "@/componentes/Layout/ContainerImgCad";


export default function Cadastro() {
    return(
        <>
            <div className="flex h-screen w-screen">
            <div className="w-1/2 bg-white h-full flex items-center justify-center">
                    <CadForm />                    
                </div>
                <div className="w-1/2 h-full">
                    <ContainerImgCad/>  
                </div>
            </div>
    </>
    )
};