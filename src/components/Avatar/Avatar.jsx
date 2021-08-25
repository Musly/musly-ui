import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Avatar.css';
import { useGravatar } from './useGravatar';

export function Avatar ({ email, title, online }) {
  const badgeClasses = classNames({
    badge: true,
    'badge--online': online,
    'badge--offline': !online,
  });

  const url = useGravatar(email, 88);

  return (
    <div className="avatar">
      <img
        src={url}
        alt={title || email}
        className="h-auto"
        width="44"
        height="44"
      />
      <div className={badgeClasses} data-test-id="badge" />
    </div>
  );
}

Avatar.propTypes = {
  email: PropTypes.string.isRequired,
  title: PropTypes.string,
  online: PropTypes.bool,
};

Avatar.defaultProps = {
  title: null,
  online: false,
};
