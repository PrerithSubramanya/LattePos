import React from 'react';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/Login';


const App: React.FC = () => {
  return (
    <AuthProvider>
      <LoginPage />
    </AuthProvider>
  );
};

export default App;