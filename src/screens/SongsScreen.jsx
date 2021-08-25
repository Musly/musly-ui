import React from 'react';
import { useTranslation } from 'react-i18next';
import PlusIcon from '../icons/plus-circle.svg';
import MusicIcon from '../icons/music.svg';
import { View, ViewHeader } from '../components/View';
import { ButtonPrimary } from '../components/ButtonPrimary';
import { SongOverview } from '../features/Song/SongOverview';

export function SongsScreen () {
  const { t } = useTranslation('song');

  return (
    <View title={t('overview.title')}>
      <ViewHeader
        headline={t('overview.headline')}
        subline={t('overview.description')}
        icon={<MusicIcon />}
      >
        <ButtonPrimary size="lg">
          <span className="text-xl mr-2">
            <PlusIcon />
          </span>
          {t('overview.addBtn')}
        </ButtonPrimary>
      </ViewHeader>
      <SongOverview />
    </View>
  );
}
