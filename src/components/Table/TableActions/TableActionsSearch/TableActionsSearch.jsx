import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../../../../icons/search.svg';
import './TableActionsSearch.css';

export function TableActionsSearch ({ onChange, placeholder, value }) {
  return (
    <div className="table__actions__search">
      <div className="table__actions__search__icon">
        <SearchIcon />
      </div>
      <input
        type="search"
        onChange={onChange}
        className="table__actions__search__input"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}

TableActionsSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

TableActionsSearch.defaultProps = {
  placeholder: null,
};
