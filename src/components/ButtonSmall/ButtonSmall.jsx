import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import './ButtonSmall.css';

export function ButtonSmall ({ children, title, ...rest }) {
  const buttonRef = useRef();

  if (title) {
    return (
      <Tooltip title={title}>
        <button type="button" {...rest} className="button--small" ref={buttonRef}>
          {children}
        </button>
      </Tooltip>
    );
  }

  return (
    <button type="button" {...rest} className="button--small" ref={buttonRef}>
      {children}
    </button>
  );
}

ButtonSmall.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

ButtonSmall.defaultProps = {
  title: null,
};
