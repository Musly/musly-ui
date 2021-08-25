import '@material-tailwind/react/tailwind.css';
import './styles.css';
import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client/react';
import { HelmetProvider } from 'react-helmet-async';
import './i18n';
import { logger } from './common/logger';
import { createClient } from './common/api';
import { App } from './App';

createClient()
  .then((client) => {
    render(
      <StrictMode>
        <ApolloProvider client={client}>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </ApolloProvider>
      </StrictMode>,
      document.getElementById('root')
    );
  })
  .catch((error) => {
    logger.error(error);
  });
