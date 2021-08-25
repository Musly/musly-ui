import React from 'react';
import { Snackbar } from '@material-ui/core';
import { useNotification, useSetNotification, useUnsetNotification } from '../../app/notification.store';
import { Alert } from '../Alert';

export function Notification () {
  const notification = useNotification();
  const setNotification = useSetNotification();
  const unsetNotification = useUnsetNotification();

  function handleClose () {
    setNotification(notification.severity, notification.text, false);
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={notification.open}
      autoHideDuration={6000}
      onClose={handleClose}
      TransitionProps={{
        onExited: () => unsetNotification(),
      }}
    >
      <Alert onClose={handleClose} severity={notification.severity}>
        {notification.text}
      </Alert>
    </Snackbar>
  );
}
