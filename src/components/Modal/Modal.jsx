import React from 'react';
import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';
import { ModalContent } from './ModalContent';
import './Modal.css';

export function Modal (props) {
  const {
    children, isOpen, onToggle, onClosed,
  } = props;

  const transition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    onRest: () => {
      if (!isOpen) {
        onClosed();
      }
    },
    config: { duration: 150 },
  });

  return transition((style, item) => (
    item && (
      <animated.div className="modal" style={style} onClick={onToggle}>
        <ModalContent isOpen={isOpen}>
          {children}
        </ModalContent>
      </animated.div>
    )
  ));
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onClosed: PropTypes.func,
};

Modal.defaultProps = {
  isOpen: false,
  onClosed: () => {},
};
