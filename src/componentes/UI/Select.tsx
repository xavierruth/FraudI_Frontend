import { LabelField } from "./Label";
type SelectProps = {
    label?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    placeholder?: string;
    required?: true; 
  };
  
  export const SelectField: React.FC <SelectProps> = ({ label, name, value, onChange, placeholder }) => {
    return (
      <div>
        <LabelField htmlFor={name}>{label}</LabelField>
        <select
          name={name}
          value={value}
          onChange={onChange}
          title={label}
          className="w-full border py-2 px-5 md:w-md flex font-sans text-sm bg-teal-50 border-gray-300 rounded-lg text-gray-800 transition-all caret-teal-500 focus:text-black focus:outline-teal-500"
          required
        >
          <option value="" disabled hidden>{placeholder || "Selecione"}</option>
          <option value="1">Sim</option>
          <option value="0">Não</option>
        </select>
      </div>
    );
  }
  