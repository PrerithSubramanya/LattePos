import { useEffect } from "react";

interface ToastProps {
    message: string;
    onClose: () => void;
  }
  
export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
  
      return () => {
        clearTimeout(timer);
      };
    }, [onClose]);
  
    return (
      <div className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-md">
        <p>{message}</p>
      </div>
    );
  };