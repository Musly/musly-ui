import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLazyQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { logger } from '../../common/logger';
import { useUserIsLoggedIn } from '../../app/user.store';
import { useLoadingStore } from '../../app/loading.store';
import { useGroupStore, useGroupsStore } from '../../app/group.store';
import { useSetNotification } from '../../app/notification.store';
import { GetGroups } from '../../features/Group/Group.graphql';
import { FetchDashboard } from '../../features/Dashboard/Dashboard.graphql';
import {
  useDashboardStore,
  defaultState as dashboardDefaultState,
} from '../../features/Dashboard/Dashboard.store';
import { Loading } from '../Loading';
import { Notification } from '../Notification';
import { Confirm } from '../Confirm';

const { setLoading } = useLoadingStore.getState();
const { setGroups } = useGroupsStore.getState();
const { setGroup } = useGroupStore.getState();
const { setDashboard } = useDashboardStore.getState();

export function AppController ({ children }) {
  const { t } = useTranslation();
  const isLoggedIn = useUserIsLoggedIn();
  const setNotification = useSetNotification();

  const [fetchDashboard] = useLazyQuery(FetchDashboard, {
    onCompleted (data) {
      setDashboard(data?.dashboard || dashboardDefaultState);
      setLoading(false);
    },
  });

  const [getGroups] = useLazyQuery(GetGroups, {
    onCompleted (data) {
      if (data?.groups.length) {
        setGroup(data?.groups[0]);
        setGroups(data?.groups);
        fetchDashboard({ variables: { groupId: data?.groups[0].id } });
      }
    },
    onError (error) {
      logger.error(error);
      setNotification('error', t('group.errors.fetchGroups'));
    },
  });

  useEffect(() => {
    if (isLoggedIn) {
      getGroups();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <Fragment>
      <Loading fullscreen />
      <Notification />
      <Confirm />
      {children}
    </Fragment>
  );
}

AppController.propTypes = {
  children: PropTypes.node.isRequired,
};
