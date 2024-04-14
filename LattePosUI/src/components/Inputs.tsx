import { FaEnvelope, FaLock } from "react-icons/fa";

interface InputProps {
    id: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    isDarkMode: boolean;
  }
  
export const Input: React.FC<InputProps> = ({ id, type, value, onChange, placeholder, isDarkMode }) => (
    <div className="relative">
      {type === 'email' ? (
        <FaEnvelope className={`absolute top-1/2 left-3 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
      ) : (
        <FaLock className={`absolute top-1/2 left-3 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
      )}
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className={`w-full pl-10 pr-3 py-2 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        placeholder={placeholder}
      />
    </div>
  );