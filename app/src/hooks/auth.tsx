import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../client/api';
import { IUserDTO } from '../dtos/IUserDTO';

interface AuthState {
  token: string;
  user: IUserDTO;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
}

interface AuthContextData {
  user: IUserDTO;
  token: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signUp(credentials: SignUpCredentials): Promise<void>;
  signOut(): void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@Nix:token',
        '@Nix:user',
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const { data: token } = await api.post('authenticate', {
      email,
      password
    });

    const { data: user } = await api.get<IUserDTO>('user', {
      headers: { 'Authorization': `Bearer ${token}` }
    })

    await AsyncStorage.multiSet([
      ['@Nix:token', token],
      ['@Nix:user', JSON.stringify(user)],
    ]);

    setData({ token, user });
  }, []);

  const signUp = useCallback(async ({ email, password, name }: SignUpCredentials) => {
    const response = await api.post('register', {
      nome: name,
      email: email,
      senha: password
    });

    console.log(response);

    if (response.status === 200) {
      signIn({ email, password });
    }
  }, [signIn]);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@Nix:token', '@Nix:user']);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, loading, signUp, token: data.token }}>
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