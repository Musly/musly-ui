/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './FormSelect.css';

export function FormSelect (props) {
  const {
    horizontal, error, secondary, label, value, onChange, placeholder, options, ...rest
  } = props;

  const wrapperClasses = classNames({
    select: true,
    'select--horizontal': horizontal,
    'select--vertical': !horizontal,
  });

  const labelClasses = classNames({
    select__label: true,
    'select__label--error': !!error,
    'select__label--secondary': !error && secondary,
    'select__label--horizontal': horizontal,
  });

  const inputClasses = classNames({
    select__select: true,
    'select__select--error': !!error,
    'select__select--secondary': !error && secondary,
  });

  return (
    <label className={wrapperClasses}>
      {label && (
        <span className={labelClasses}>
          {label}
        </span>
      )}
      <select onChange={onChange} value={value} {...rest} className={inputClasses}>
        {options.map((option) => (
          <option
            value={option.value}
            key={option.value}
            selected={value === option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

FormSelect.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    label: PropTypes.string,
  })).isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string,
  secondary: PropTypes.bool,
  horizontal: PropTypes.bool,
  error: PropTypes.string,
  placeholder: PropTypes.string,
};

FormSelect.defaultProps = {
  onChange: null,
  label: null,
  secondary: false,
  horizontal: false,
  error: null,
  placeholder: null,
};
