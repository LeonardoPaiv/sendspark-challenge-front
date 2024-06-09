import { createContext } from 'react';

interface AuthContextType {
  token: string | null;
  firstName: string | null;
  login: (newToken: string, name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  token: '',
  firstName: '',
  login: () => {},
  logout: () => {}
});


export { AuthContext };
