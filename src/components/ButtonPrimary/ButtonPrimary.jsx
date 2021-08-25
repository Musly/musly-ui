import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-tailwind/react/Button';

export function ButtonPrimary ({ children, full, ...rest }) {
  return (
    <Button color="blue" buttonType="filled" rounded={false} block={full} {...rest} ripple="light">
      {children}
    </Button>
  );
}

ButtonPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  full: PropTypes.bool,
};

ButtonPrimary.defaultProps = {
  full: false,
};
