import React from 'react';
import { useTranslation } from 'react-i18next';
import HomeIcon from '../../icons/home.svg';
import MusicIcon from '../../icons/music.svg';
import TagIcon from '../../icons/tag.svg';
import HashIcon from '../../icons/hash.svg';
import ListIcon from '../../icons/list.svg';
import CalendarIcon from '../../icons/calendar.svg';
import BookIcon from '../../icons/book.svg';
import UsersIcon from '../../icons/users.svg';
import { Logo } from './Logo';
import { GroupSelector } from '../../features/Group/GroupSelector';
import { NavigationItem } from './NavigationItem';
import { NavigationFooter } from './NavigationFooter';
import './Navigation.css';

export function Navigation () {
  const { t } = useTranslation('navigation');

  return (
    <nav className="navigation">
      <Logo />
      <ul className="navigation__menu">
        <NavigationItem url="/" label={t('items.dashboard')} icon={<HomeIcon />} />
        <NavigationItem url="/songs" label={t('items.songs')} icon={<MusicIcon />} />
        <NavigationItem url="/genres" label={t('items.genres')} icon={<TagIcon />} />
        <NavigationItem url="/keys" label={t('items.keys')} icon={<HashIcon />} />
        <NavigationItem url="/setlists" label={t('items.setlists')} icon={<ListIcon />} />
        <NavigationItem url="/events" label={t('items.events')} icon={<CalendarIcon />} />
        <NavigationItem url="/contacts" label={t('items.contacts')} icon={<BookIcon />} />
        <NavigationItem url="/group" label={t('items.group')} icon={<UsersIcon />} />
      </ul>
      <GroupSelector />
      <NavigationFooter />
    </nav>
  );
}
