import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

export function Dropdown ({ children }) {
  return (
    <div className="dropdown" data-test-id="dropdown">
      {children}
    </div>
  );
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
};
