import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';
import { useHistory } from 'react-router-dom';

interface AuthState {
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  token: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  isAuthenticated(): boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@SpringCrud:token');

    if (token) {
      return { token };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(
    async ({ email, password }) => {
      try {
        const response = await api.post('/auth', {
          email,
          password,
        });

        const { token } = response.data;

        localStorage.setItem('@SpringCrud:token', token);

        setData({ token });

        alert('Signed in successfully');
        history.push('/index');
      } catch (error) {
        alert('Invalid username/password');
      }
    },
    [history],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@SpringCrud:token');

    setData({} as AuthState);
    history.push('/login');
  }, [history]);

  const isAuthenticated = useCallback(() => {
    if (data.token) {
      return true;
    } else {
      return false;
    }
  }, [data.token]);

  return (
    <AuthContext.Provider
      value={{ token: data.token, signIn, signOut, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
