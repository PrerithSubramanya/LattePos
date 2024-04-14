import React, { useState, useContext } from 'react';
import { FaGoogle, FaSun, FaMoon } from 'react-icons/fa';
import { Button, SocialButton } from '../components/Buttons';
import { Input } from '../components/Inputs';
import { AuthContext } from '../context/AuthContext';
import logo from '../assets/logo.svg'

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    await login(email, password);
  };

  const handleGoogleLogin = async () => {
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="absolute top-4 right-4">
        <button className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`} onClick={toggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <div className={`max-w-md w-full ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg rounded-lg p-6`}>
        <div className="flex justify-center mb-6">
          <img src={logo} alt="LattePOSLogo" className="h-20" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Email
          </label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" isDarkMode={isDarkMode} />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Password
          </label>
          <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" isDarkMode={isDarkMode} />
        </div>
        <div className="flex items-center justify-between mb-4">
          <label className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} className="mr-2" />
            Remember Me
          </label>
          <a href="#" className={`text-sm ${isDarkMode ? 'text-blue-400 hover:text-blue-500' : 'text-blue-600 hover:text-blue-700'}`}>
            Create an account
          </a>
        </div>
        <Button onClick={handleLogin} isDarkMode={isDarkMode}>
          Login
        </Button>
        <div className="mt-4">
          <SocialButton onClick={handleGoogleLogin} isDarkMode={isDarkMode} icon={<FaGoogle className="mr-2" />}>
            Login with Google
          </SocialButton>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;