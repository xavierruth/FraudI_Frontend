interface ButtonProps {
    title?: string; // texto do botão
    onClick?: () => void; // função opcional para executar ao clicar
    children?: React.ReactNode; // se quiser personalizar (ex: colocar um ícone)
    to?: string; // caminho de rota, para saber se o botão está ativo
    type?: "button" | "submit" | "reset"; // tipo do botão
    disabled?: boolean; // se o botão está desativado
    onClose?: () => void; 
    
    

};

// Botão primário
export const BTNPrimary: React.FC<ButtonProps> = ({onClick, children, type, disabled = false}) => { // quando o botão for, ex: dropdown, não colocar onClick;
    
    return (
        <button  
        type={type} 
        disabled={disabled} 
        onClick={onClick} 
        className= "cursor-pointer font-sans inline-flex w-md justify-center items-center gap-2 px-6 py-3 bg-emerald-400 hover:bg-emerald-600 hover:scale-[1.05] active:bg-gradient-to-b active:from-emerald-600 active:to-teal-600 rounded-lg text-slate-900 active:text-slate-50 text-lg font-normal mx-auto transition-all duration-400 ease-in-out active:border-lime-100 active:shadow-[0_0_0_1px_#69D3C1]">
            {children}
        </button> 
    );
};

//BTotão Secundário Pequeno

export const BTNGhostShort : React.FC <ButtonProps> = ({onClick, title, children, type}) => {
    return(
        <button
        title={title}
        type={type}
        onClick={onClick}
        className="cursor-pointer font-sans inline-flex max-w-md justify-center items-center gap-2 px-6 py-3 border-2 border-[#35C5B6] hover:border-[#00AF9C] rounded-lg text-sm text-[#05453D] font-normal mx-auto transition-all duration-200  active:border-[#11BFAB] active:rounded-8xl active:shadow-[0_0_0_1px_#69D3C1]">
            {children}
        </button>
    )
};

//Botão Secundário Grande

export const BTNGhost : React.FC <ButtonProps> = ({onClick,title, children, type}) => {
    return(
        <button
        title={title}
        type={type}
        onClick={onClick}
        className="cursor-pointer font-sans inline-flex w-md justify-center items-center gap-2 px-6 py-3 border-2 border-[#35C5B6] hover:border-[#00AF9C] rounded-lg text-[#05453D] font-normal text-lg  mx-auto transition-all duration-200  active:border-[#11BFAB] active:rounded-8xl active:shadow-[0_0_0_1px_#69D3C1]">
            {children}
        </button>
    )
};


// Botão Texto 

export const BTNText : React.FC <ButtonProps> = ({onClick, title, children, type}) => {
    return(
        <button 
        title={title}
        type={type}
        onClick={onClick}
        className="cursor-pointer font-sans inline-flex rounded-lg border-1 border-[#fff] justify-center mt-4 items-center gap-2 px-6 py-3 text-x text-[#6A7282] font-normal mx-auto hover:text-[#007B6B] transition-all duration-200 active:rounded-xl active:border active:border-[#11BFAB]">
            {children}
        </button>

    );
};


// Botão para Sidebar className={`${isActive}`}>
/*export const BTNSide : React.FC<ButtonProps> = ({onClick, children, type}) => {

    return (



    );
}; */

// Botão para Menu hamburguer

export const BTNBurger : React.FC <ButtonProps> = ({onClick, children, type}) => {
    return (

        <button type={type} onClick={onClick} className="p-4">
            {children}
        </button>

    );
};  


export const BTNCTA : React.FC <ButtonProps> = ({title, type, onClick}) =>{
    return (

        <button 
        type={type} 
        onClick={onClick} 
        className="px-6 py-2 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-gray-100 transition">
          { title }
        </button>
    )
}