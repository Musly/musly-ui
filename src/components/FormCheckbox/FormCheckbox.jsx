/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import './FormCheckbox.css';

export function FormCheckbox (props) {
  const {
    checked, label, onChange, ...rest
  } = props;

  return (
    <label className="checkbox group">
      <input
        type="checkbox"
        {...rest}
        checked={checked}
        onChange={onChange}
        aria-label={label}
        className="checkbox__input"
      />
      {label && (
        <span className="checkbox__label">
          {label}
        </span>
      )}
    </label>
  );
}

FormCheckbox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

FormCheckbox.defaultProps = {
  label: null,
  onChange: null,
  checked: false,
};
