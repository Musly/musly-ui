import React, { useEffect } from 'react';
import { useLoadingStore } from '../app/loading.store';
import { Login } from '../features/User/Login';
import { Signup } from '../features/User/Signup';
import './AuthScreen.css';

const { setLoading } = useLoadingStore.getState();

export function AuthScreen () {
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <article className="auth">
      <Login />
      <Signup />
    </article>
  );
}
