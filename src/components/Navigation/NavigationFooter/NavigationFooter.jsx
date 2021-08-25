import React from 'react';
import { useTranslation } from 'react-i18next';
import './NavigationFooter.css';

export function NavigationFooter () {
  const { t } = useTranslation('navigation');

  return (
    <div className="navigation-footer">
      <div
        className="navigation-footer__content"
        dangerouslySetInnerHTML={{ __html: t('footer') }}
      />
    </div>
  );
}
