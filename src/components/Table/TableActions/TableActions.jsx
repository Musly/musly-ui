import React from 'react';
import PropTypes from 'prop-types';
import { TableActionsSearch } from './TableActionsSearch';
import './TableActions.css';

export function TableActions (props) {
  const {
    children, onChange, value, placeholder,
  } = props;

  return (
    <div className="table__actions">
      {children}
      <div className="flex-grow" />
      <TableActionsSearch onChange={onChange} value={value} placeholder={placeholder} />
    </div>
  );
}

TableActions.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

TableActions.defaultProps = {
  children: null,
  onChange: null,
  value: '',
  placeholder: null,
};
