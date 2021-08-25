import React from 'react';
import SearchIcon from '../../../icons/search.svg';
import './Search.css';

export function Search () {
  return (
    <form className="search">
      <div className="search__icon">
        <SearchIcon />
      </div>
      <input
        type="text"
        aria-label="search"
        className="search__input"
        placeholder="Type to search ..."
      />
    </form>
  );
}
