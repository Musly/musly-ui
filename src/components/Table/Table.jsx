import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormCheckbox } from '../FormCheckbox';
import { TableHeaderItem } from './TableHeaderItem';
import './Table.css';

export function Table (props) {
  const {
    children, titles, actions, small,
  } = props;

  const tableClasses = classNames({
    table: true,
    'table--small': small,
  });

  return (
    <div className={tableClasses}>
      {actions}
      <table className="table__table">
        <thead className="table__header">
          <tr className="table__header__row">
            {titles.map((title) => {
              if (title.isCheckbox) {
                return (
                  <TableHeaderItem isCheckbox key="title-checkbox">
                    <FormCheckbox
                      checked={title.checked}
                      disabled={!title.checked}
                      onChange={title.onChange}
                    />
                  </TableHeaderItem>
                );
              }
              return (
                <TableHeaderItem key={title.value}>
                  {title.value}
                </TableHeaderItem>
              );
            })}
          </tr>
        </thead>
        <tbody className="table__body">
          {children}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
  actions: PropTypes.node,
  titles: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    isCheckbox: PropTypes.bool,
  })).isRequired,
  small: PropTypes.bool,
};

Table.defaultProps = {
  actions: null,
  small: false,
};
