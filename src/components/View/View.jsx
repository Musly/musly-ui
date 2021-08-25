import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import './View.css';

export function View ({ children, title }) {
  const htmlTitle = title ? `${title} :: Musly` : 'Musly';

  return (
    <article className="view">
      <Helmet title={htmlTitle} />
      {children}
    </article>
  );
}

View.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

View.defaultProps = {
  title: null,
};
