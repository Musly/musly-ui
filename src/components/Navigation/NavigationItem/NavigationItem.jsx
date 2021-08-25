import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import ChevronRightIcon from '../../../icons/chevron-right.svg';
import './NavigationItem.css';

export function NavigationItem ({ url, label, icon }) {
  const { pathname } = useLocation();

  const isActive = (url === '/') ? pathname === url : pathname.startsWith(url);

  const linkClasses = classNames({
    navigation__item__link: true,
    'navigation__item__link--inactive': !isActive,
    'navigation__item__link--active': isActive,
  });

  const iconClasses = classNames({
    navigation__item__icon: true,
    'navigation__item__icon--inactive': !isActive,
    'navigation__item__icon--active': isActive,
  });

  const chevronClasses = classNames({
    'navigation__item__chevron--inactive': !isActive,
    'navigation__item__chevron--active': isActive,
  });

  return (
    <li className="navigation__item">
      <Link to={url} className={linkClasses}>
        <span className={iconClasses}>
          {icon}
        </span>
        <span className="navigation__item__label">
          {label}
        </span>
        <span className={chevronClasses}>
          <ChevronRightIcon />
        </span>
      </Link>
    </li>
  );
}

NavigationItem.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};
