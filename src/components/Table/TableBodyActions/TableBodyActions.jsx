import React from 'react';
import PropTypes from 'prop-types';
import './TableBodyActions.css';

export function TableBodyActions ({ children }) {
  return (
    <td className="table__body__actions">
      <div className="table__body__actions__inner">
        {children}
      </div>
    </td>
  );
}

TableBodyActions.propTypes = {
  children: PropTypes.node.isRequired,
};
