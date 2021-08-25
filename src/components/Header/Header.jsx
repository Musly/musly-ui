import React from 'react';
import { UserMenu } from '../../features/User/UserMenu';
import { Search } from './Search';
import './Header.css';

export function Header () {
  return (
    <header className="header" role="banner">
      <Search />
      <div className="flex-grow" />
      <UserMenu />
    </header>
  );
}
