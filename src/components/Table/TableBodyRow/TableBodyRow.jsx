import React from 'react';
import PropTypes from 'prop-types';
import './TableBodyRow.css';

export function TableBodyRow ({ children }) {
  return (
    <tr className="table__body__row">
      {children}
    </tr>
  );
}

TableBodyRow.propTypes = {
  children: PropTypes.node.isRequired,
};
