import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import { logger } from '../../../common/logger';
import { useSetNotification } from '../../../app/notification.store';
import { useSetLoading } from '../../../app/loading.store';
import { useSetUser, defaultState } from '../../../app/user.store';
import { ButtonSecondary } from '../../../components/ButtonSecondary';
import { FormInput } from '../../../components/FormInput';
import { CreateUser, LoginUser } from '../User.graphql';
import './Signup.css';

export function Signup () {
  const { t } = useTranslation('user');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  // const [passwordConfirm, setPasswordConfirm] = useState('');
  const setNotification = useSetNotification();
  const setLoading = useSetLoading();
  const setUser = useSetUser();
  const [createUser] = useMutation(CreateUser, {
    fetchPolicy: 'no-cache',
  });
  const [loginUser] = useMutation(LoginUser, {
    fetchPolicy: 'no-cache',
  });

  async function handleSubmit (event) {
    event.preventDefault();
    setLoading(true);

    try {
      await createUser({
        variables: {
          email, firstName, lastName, password,
        },
      });
      const response = await loginUser({ variables: { email, password } });
      setUser(response?.data?.login || defaultState);
    } catch (error) {
      setNotification('error', error.message);
      logger.error(error);
      setLoading(false);
    }
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <div className="signup__content">
        <div className="signup__headline">
          {t('signup.headline')}
        </div>
        <div className="signup__description">
          {t('signup.description')}
        </div>
        <div className="mb-6">
          <FormInput
            type="email"
            secondary
            placeholder={t('signup.email.placeholder')}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-6">
          <FormInput
            type="text"
            secondary
            placeholder={t('signup.firstName.placeholder')}
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div className="mb-6">
          <FormInput
            type="text"
            secondary
            placeholder={t('signup.lastName.placeholder')}
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div className="mb-14">
          <FormInput
            type="password"
            secondary
            placeholder={t('signup.password.placeholder')}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <ButtonSecondary type="submit" full size="lg">
          {t('signup.signupBtn')}
        </ButtonSecondary>
      </div>
    </form>
  );
}
