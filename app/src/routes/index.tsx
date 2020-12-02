import React from 'react';
import { AppLoading } from 'expo';

import { useAuth } from '../hooks/auth';

import AppRouter from './app.routes';
import AuthRouter from './auth.routes';

const Routes: React.FC = () => {
  const { loading, user } = useAuth();

  if (loading) {
    return <AppLoading />
  }

  return user ? <AppRouter /> : <AuthRouter />
};

export default Routes;
