/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './FormInput.css';

export function FormInput (props) {
  const {
    horizontal, error, secondary, label, value, onChange, placeholder, ...rest
  } = props;

  const wrapperClasses = classNames({
    input: true,
    'input--horizontal': horizontal,
    'input--vertical': !horizontal,
  });

  const labelClasses = classNames({
    input__label: true,
    'input__label--error': !!error,
    'input__label--secondary': !error && secondary,
    'input__label--horizontal': horizontal,
  });

  const inputClasses = classNames({
    input__input: true,
    'input__input--error': !!error,
    'input__input--secondary': !error && secondary,
  });

  return (
    <label className={wrapperClasses}>
      {label && (
        <span className={labelClasses}>
          {label}
        </span>
      )}

      <input
        type="text"
        {...rest}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClasses}
      />

      {error && (
        <div className="input__error">
          {error}
        </div>
      )}
    </label>
  );
}

FormInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string,
  secondary: PropTypes.bool,
  horizontal: PropTypes.bool,
  error: PropTypes.string,
  placeholder: PropTypes.string,
};

FormInput.defaultProps = {
  onChange: null,
  label: null,
  secondary: false,
  horizontal: false,
  error: null,
  placeholder: null,
};
