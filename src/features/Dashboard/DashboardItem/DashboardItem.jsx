import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../Dashboard.css';

export function DashboardItem (props) {
  const {
    icon, label, count, to,
  } = props;

  return (
    <Link to={to} className="dashboard__item">
      <div className="dashboard__item__panel">
        <div className="dashboard__item__icon">
          {icon}
        </div>
        <div className="dashboard__item__meta">
          <div className="dashboard__item__count">
            {count}
          </div>
          <div className="dashboard__item__label">
            {label}
          </div>
        </div>
      </div>
    </Link>
  );
}

DashboardItem.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  to: PropTypes.string.isRequired,
};
