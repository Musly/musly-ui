import React from 'react';
import PropTypes from 'prop-types';
import './Panel.css';

export function Panel ({ children }) {
  return (
    <div className="panel">
      {children}
    </div>
  );
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
};
