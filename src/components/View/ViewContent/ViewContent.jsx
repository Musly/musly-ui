import React from 'react';
import PropTypes from 'prop-types';
import './ViewContent.css';

export function ViewContent ({ children }) {
  return (
    <div className="view__content">
      {children}
    </div>
  );
}

ViewContent.propTypes = {
  children: PropTypes.node.isRequired,
};
