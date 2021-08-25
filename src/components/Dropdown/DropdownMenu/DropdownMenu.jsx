import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './DropdownMenu.css';

export function DropdownMenu ({ position, children }) {
  const menuClasses = classNames({
    dropdown__menu: true,
    'dropdown__menu--top': !position,
  }, position);

  return (
    <div className={menuClasses} data-test-id="dropdown-menu">
      <nav className="dropdown__menu__inner">
        <ul className="dropdown__menu__inner__list">
          {children}
        </ul>
      </nav>
    </div>
  );
}

DropdownMenu.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.string,
};

DropdownMenu.defaultProps = {
  position: null,
};
