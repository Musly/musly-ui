import React from 'react';
import PropTypes from 'prop-types';
import { useTransition, animated, config } from 'react-spring';
import './ModalContent.css';

export function ModalContent ({ children, isOpen }) {
  const transition = useTransition(isOpen, {
    from: { transform: 'translateY(-50%)' },
    enter: { transform: 'translateY(0%)' },
    leave: { transform: 'translatey(-50%)' },
    config: config.gentle,
  });

  function handleClick (event) {
    event.stopPropagation();
  }

  return transition((style, item) => (
    item && (
      <animated.div className="modal__content" style={style} onClick={handleClick}>
        {children}
      </animated.div>
    )
  ));
}

ModalContent.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
};

ModalContent.defaultProps = {
  isOpen: false,
};
