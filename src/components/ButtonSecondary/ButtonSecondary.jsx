import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-tailwind/react/Button';

export function ButtonSecondary ({ children, full, ...rest }) {
  return (
    <Button color="yellow" buttonType="filled" rounded={false} block={full} {...rest} ripple="light" className="text-blue-900">
      {children}
    </Button>
  );
}

ButtonSecondary.propTypes = {
  children: PropTypes.node.isRequired,
  full: PropTypes.bool,
};

ButtonSecondary.defaultProps = {
  full: false,
};
