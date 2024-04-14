import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../components/SupabaseClient';
import { User } from '@supabase/supabase-js';

interface AuthContextProps {
  auth: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  error: string | null;
}

export const AuthContext = createContext<AuthContextProps>({
  auth: false,
  user: null,
  login: async () => {},
  signOut: async () => {},
  error: null,
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "PASSWORD_RECOVERY") {
          setAuth(false);
        } else if (event === "SIGNED_IN") {
          setUser(session?.user ?? null);
          setAuth(true);
        } else if (event === "SIGNED_OUT") {
          setAuth(false);
          setUser(null);
        }
        setLoading(false);
      }
    );

    return () => {
      authListener.subscription?.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.error('Login error:', error.message);
      setError(error.message);
    } else {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error('Error retrieving user:', error.message);
        setError(error.message);
      } else {
        const { user: currentUser } = data;
        setUser(currentUser ?? null);
        setAuth(currentUser ? true : false);
        setError(null);
      }
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ auth, user, login, signOut, error }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};