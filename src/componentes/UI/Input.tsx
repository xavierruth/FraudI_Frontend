import { LabelField } from "./Label";
type InputProps = {
    label?: string;
    name: string;
    value: string;
    type: string;
    children?: React.ReactNode;
    required: true;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  
  export const InputField: React.FC <InputProps> = ({ label ,name, value, type, placeholder, onChange }) => {
    return (
      <div>
        <LabelField htmlFor={name}>{label}</LabelField>
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required
          className="w-full border py-2 px-5 md:w-md flex font-sans text-sm border-gray-300 rounded-lg text-gray-800 transition-all caret-teal-500 focus:text-black focus:outline-teal-500"
        />
      </div>
    );
  }
  