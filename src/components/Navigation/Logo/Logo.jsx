import React from 'react';
import SvgLogo from '../../../icons/logo.svg';
import './Logo.css';

export function Logo () {
  return (
    <div className="logo" aria-hidden="true">
      <div className="logo__icon">
        <SvgLogo />
      </div>
    </div>
  );
}
