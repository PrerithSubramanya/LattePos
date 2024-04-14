export const SocialButton: React.FC<{ onClick: () => void; isDarkMode: boolean; icon: React.ReactNode; children: React.ReactNode }> = ({ onClick, isDarkMode, icon, children }) => (
    <button
      className={`w-full px-4 py-2 flex items-center justify-center rounded-md ${isDarkMode ? 'bg-red-600 hover:bg-red-700' : 'bg-red-500 hover:bg-red-600'} text-white focus:outline-none focus:ring-2 focus:ring-red-500`}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );

  export const Button: React.FC<{ onClick: () => void; isDarkMode: boolean; children: React.ReactNode }> = ({ onClick, isDarkMode, children }) => (
    <button
      className={`w-full px-4 py-2 flex items-center justify-center rounded-md ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
      onClick={onClick}
    >
      {children}
    </button>
  );
