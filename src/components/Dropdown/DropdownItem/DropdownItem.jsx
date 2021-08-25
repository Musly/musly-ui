import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './DropdownItem.css';

export function DropdownItem (props) {
  const {
    url, label, icon, active, ...rest
  } = props;

  const linkClasses = classNames({
    dropdown__item__link: true,
    'dropdown__item__link--active': active,
  });

  return (
    <li className="dropdown__item" role="presentation">
      <a href={url} {...rest} role="menuitem" className={linkClasses}>
        {icon && (
          <div className="dropdown__icon" data-test-id="icon">
            {icon}
          </div>
        )}
        <span className="flex-grow" data-test-id="label">
          {label}
        </span>
      </a>
    </li>
  );
}

DropdownItem.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  active: PropTypes.bool,
};

DropdownItem.defaultProps = {
  url: '/',
  icon: null,
  active: false,
};
