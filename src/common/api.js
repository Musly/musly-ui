import {
  ApolloClient, InMemoryCache, createHttpLink, from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import apolloLogger from 'apollo-link-logger';
import jwtDecode from 'jwt-decode';
import fetch from 'cross-fetch';
import { useUserStore, defaultState } from '../app/user.store';
import { logger, getGroupLogger } from './logger';

const graphQlLogger = getGroupLogger('GraphQL', '#eee');
const networkLogger = getGroupLogger('Network', '#f00');

export async function createClient () {
  const apiUrl = import.meta.env.VITE_API_URL;

  const httpLink = createHttpLink({
    uri: apiUrl,
    credentials: 'include',
    fetch,
  });

  const authLink = setContext((_, { headers }) => {
    const { user } = useUserStore.getState();

    if (!user.token) {
      return { headers };
    }

    try {
      jwtDecode(user.token);

      return {
        headers: { ...headers, authorization: user.token },
      };
    } catch (error) {
      logger.error(error);
      useUserStore.setState(defaultState);
      return { headers };
    }
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        graphQlLogger.logError('Error', { message, locations, path });
      });
    }

    if (networkError) {
      networkLogger.logError('Error', networkError);
    }
  });

  const defaultOptions = {
    query: {
      fetchPolicy: 'no-cache',
    },
    watchQuery: {
      fetchPolicy: 'no-cache',
      nextFetchPolicy: 'no-cache',
    },
    mutate: {
      fetchPolicy: 'no-cache',
    },
  };

  const client = new ApolloClient({
    link: from([
      import.meta.env.MODE === 'development' && apolloLogger,
      errorLink,
      authLink.concat(httpLink),
    ].filter(Boolean)),
    cache: new InMemoryCache(),
    connectToDevTools: import.meta.env.MODE === 'development',
    defaultOptions,
  });

  return client;
}
