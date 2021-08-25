import React from 'react';
import PropTypes from 'prop-types';
import './ViewHeader.css';

export function ViewHeader (props) {
  const {
    icon, subline, headline, children,
  } = props;

  return (
    <header role="banner" className="view__header">
      <div className="view__header__content">
        {icon && (
          <div className="view__header__icon">
            {icon}
          </div>
        )}
        <div className="view__header__titles">
          <h1 className="view__header__headline">
            {headline}
          </h1>
          {subline && (
            <h2 className="view__header__subline">
              {subline}
            </h2>
          )}
        </div>
        <div className="view__header__actions">
          {children}
        </div>
      </div>
    </header>
  );
}

ViewHeader.propTypes = {
  headline: PropTypes.string.isRequired,
  children: PropTypes.node,
  subline: PropTypes.string,
  icon: PropTypes.node,
};

ViewHeader.defaultProps = {
  children: null,
  subline: null,
  icon: null,
};
