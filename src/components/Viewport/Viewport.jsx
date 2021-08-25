import React from 'react';
import PropTypes from 'prop-types';
import './Viewport.css';

export function Viewport ({ children }) {
  return (
    <div className="viewport">
      {children}
    </div>
  );
}

Viewport.propTypes = {
  children: PropTypes.node.isRequired,
};
