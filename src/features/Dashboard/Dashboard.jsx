import React from 'react';
import { useTranslation } from 'react-i18next';
import MusicIcon from '../../icons/music.svg';
import TagIcon from '../../icons/tag.svg';
import { useDashboardStore } from './Dashboard.store';
import { DashboardItem } from './DashboardItem';
import './Dashboard.css';

const getDashboard = (state) => state.dashboard;

export function Dashboard () {
  const dashboard = useDashboardStore(getDashboard);
  const { t } = useTranslation('dashboard');

  return (
    <div className="dashboard">
      <DashboardItem
        to="/songs"
        icon={<MusicIcon />}
        count={dashboard.songCount}
        label={t('labels.songs', { count: dashboard.songCount })}
      />
      <DashboardItem
        to="/genres"
        icon={<TagIcon />}
        count={dashboard.genreCount}
        label={t('labels.genres', { count: dashboard.genreCount })}
      />
    </div>
  );
}
