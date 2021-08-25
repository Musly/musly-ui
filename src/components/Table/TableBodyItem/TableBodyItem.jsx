import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import './TableBodyItem.css';

export function TableBodyItem (props) {
  const {
    children, href, title, isCheckbox, colSpan, onClick,
  } = props;

  const itemClasses = classNames({
    table__body__item: true,
    'table__body__item--checkbox': isCheckbox,
  });

  if (isCheckbox) {
    return (
      <td className={itemClasses} colSpan={colSpan}>
        {children}
      </td>
    );
  }

  if (href || onClick) {
    const content = (
      <Link to={href || '/'} onClick={onClick} className="table__body__item__link">
        {children}
      </Link>
    );
    return (
      <td className={itemClasses} colSpan={colSpan}>
        {title ? (
          <Tooltip title={title}>
            {content}
          </Tooltip>
        ) : content}
      </td>
    );
  }

  return (
    <td className={itemClasses} colSpan={colSpan}>
      {children}
    </td>
  );
}

TableBodyItem.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  title: PropTypes.string,
  isCheckbox: PropTypes.bool,
  onClick: PropTypes.func,
  colSpan: PropTypes.number,
};

TableBodyItem.defaultProps = {
  children: null,
  href: null,
  title: null,
  isCheckbox: false,
  onClick: null,
  colSpan: null,
};
