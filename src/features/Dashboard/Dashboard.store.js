import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const defaultState = {
  songCount: 0,
  genreCount: 0,
};

export const useDashboardStore = create(devtools((set) => ({
  dashboard: defaultState,
  setDashboard: (dashboard) => set({ dashboard }),
  unsetDashboard: () => set({ dashboard: defaultState }),
}), 'dashboard'));
