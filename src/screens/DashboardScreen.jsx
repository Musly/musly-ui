import React from 'react';
import { useTranslation } from 'react-i18next';
import HomeIcon from '../icons/home.svg';
import { View, ViewHeader, ViewContent } from '../components/View';
import { Dashboard } from '../features/Dashboard';

export function DashboardScreen () {
  const { t } = useTranslation('dashboard');

  return (
    <View>
      <ViewHeader
        headline={t('headline')}
        subline={t('description')}
        icon={<HomeIcon />}
      />
      <ViewContent>
        <Dashboard />
      </ViewContent>
    </View>
  );
}
