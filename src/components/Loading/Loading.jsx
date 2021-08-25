import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useTransition, animated } from 'react-spring';
import { useLoadingStore } from '../../app/loading.store';
import SpinnerIcon from '../../icons/spinner.svg';
import './Loading.css';

const getLoading = (state) => state.loading;

export function Loading ({ fullscreen, inline }) {
  const loading = useLoadingStore(getLoading);

  const loadingClasses = classNames({
    loading: true,
    'loading--regular': inline && !fullscreen,
    'loading--full': !inline && fullscreen,
  });

  const transition = useTransition(loading, {
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  if (!inline) {
    return transition((styles, item) => (
      item && (
        <animated.div className={loadingClasses} style={styles}>
          <div className="loading__spinner">
            <SpinnerIcon />
          </div>
        </animated.div>
      )
    ));
  }

  return (
    <div className={loadingClasses}>
      <div className="loading__spinner">
        <SpinnerIcon />
      </div>
    </div>
  );
}

Loading.propTypes = {
  fullscreen: PropTypes.bool,
  inline: PropTypes.bool,
};

Loading.defaultProps = {
  fullscreen: false,
  inline: false,
};
