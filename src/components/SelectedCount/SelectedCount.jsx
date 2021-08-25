import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './SelectedCount.css';

export function SelectedCount ({ count }) {
  const { t } = useTranslation();

  return (
    <div className="selected">
      {t('selected', { count })}
    </div>
  );
}

SelectedCount.propTypes = {
  count: PropTypes.number.isRequired,
};
