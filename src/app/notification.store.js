import create from 'zustand';
import { devtools } from 'zustand/middleware';

const defaultState = {
  open: false,
  text: null,
  severity: 'success',
};

export const useNotificationStore = create(devtools((set) => ({
  notification: defaultState,
  setNotification: (severity, text, open = true) => set({ notification: { open, severity, text } }),
  unsetNotification: () => set({ notification: defaultState }),
}), 'notification'));

const getNotification = (state) => state.notification;
const getSetNotification = (state) => state.setNotification;
const getUnsetNotification = (state) => state.unsetNotification;

export function useNotification () {
  return useNotificationStore(getNotification);
}

export function useSetNotification () {
  return useNotificationStore(getSetNotification);
}

export function useUnsetNotification () {
  return useNotificationStore(getUnsetNotification);
}
