import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useSetLoading } from '../../../app/loading.store';
import { useSetNotification } from '../../../app/notification.store';
import { ButtonPrimary } from '../../../components/ButtonPrimary';
import { FormInput } from '../../../components/FormInput';
import { FormCheckbox } from '../../../components/FormCheckbox';
import LogoDark from '../../../icons/logo-dark.svg';
import { useSetUser, useUnsetUser } from '../../../app/user.store';
import { logger } from '../../../common/logger';
import { LoginUser } from '../User.graphql';
import './Login.css';

export function Login () {
  const { t } = useTranslation('user');
  const setLoading = useSetLoading();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loginUser] = useMutation(LoginUser);
  const setNotification = useSetNotification();
  const setUser = useSetUser();
  const unsetUser = useUnsetUser();

  async function handleSubmit (event) {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await loginUser({ variables: { email, password } });
      setUser({
        ...response.data?.login,
        ...rememberMe && { rememberMe },
      });
    } catch (error) {
      logger.error(error);
      setNotification('error', error.message);
      unsetUser();
      setLoading(false);
    }
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <div className="login__content">
        <div className="login__logo">
          <LogoDark />
        </div>
        <div className="login__headline">
          {t('login.headline')}
        </div>
        <div className="login__description">
          {t('login.description')}
        </div>
        <div className="mb-6">
          <FormInput
            type="email"
            placeholder={t('login.email.placeholder')}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-2">
          <FormInput
            type="password"
            placeholder={t('login.password.placeholder')}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div className="login__forgot-password">
            {t('login.password.forgot')}
          </div>
          <div className="mb-14">
            <FormCheckbox
              label={t('login.rememberMe')}
              checked={rememberMe}
              onChange={() => setRememberMe((prevState) => !prevState)}
            />
          </div>
        </div>
        <ButtonPrimary type="submit" full size="lg">
          {t('login.loginBtn')}
        </ButtonPrimary>
      </div>
    </form>
  );
}
