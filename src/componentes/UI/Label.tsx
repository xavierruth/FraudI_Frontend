
type LabelProps = {
    label?: string;
    htmlFor: string;
    children?: React.ReactNode;
  };
  
  export const LabelField = ({ htmlFor, label, children }: LabelProps) => {
    return (
      <label htmlFor={htmlFor} className="flex justify-start w-md py-1 px-5 mb-1 font-sans font-medium text-base text-teal-900">{label ?? children}</label>
    );
  }
  