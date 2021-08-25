import React from 'react';
import PropTypes from 'prop-types';
import { TableBodyItem } from '../TableBodyItem';
import { TableBodyRow } from '../TableBodyRow';
import './TableBodyItemNoResults.css';

export function TableBodyItemNoResults ({ children, size }) {
  return (
    <TableBodyRow>
      <TableBodyItem colSpan={size}>
        <div className="table__body__item__noResults">
          {children}
        </div>
      </TableBodyItem>
    </TableBodyRow>
  );
}

TableBodyItemNoResults.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number.isRequired,
};
