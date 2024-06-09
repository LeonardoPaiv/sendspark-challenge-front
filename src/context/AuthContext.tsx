import { createContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  token: string | null;
  firstName: string | null;
  login: (newToken: string, name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [firstName, setfirstName] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const login = (newToken: string, name: string) => {
    localStorage.setItem('token', newToken);
    localStorage.setItem('firstName', name);
    setToken(newToken);
    setfirstName(name)
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('firstName');
    setToken(null);
    setfirstName(null);
  };

  return (
    <AuthContext.Provider value={{ token, firstName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
