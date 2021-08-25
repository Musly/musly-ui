import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './TableHeaderItem.css';

export function TableHeaderItem ({ children, isCheckbox }) {
  const itemClasses = classNames({
    table__header__item: true,
    'table__header__item--checkbox': isCheckbox,
  });

  return (
    <th className={itemClasses}>
      {children}
    </th>
  );
}

TableHeaderItem.propTypes = {
  children: PropTypes.node,
  isCheckbox: PropTypes.bool,
};

TableHeaderItem.defaultProps = {
  children: null,
  isCheckbox: false,
};
