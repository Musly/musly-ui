import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useLoadingStore = create(devtools((set) => ({
  loading: true,
  setLoading: (loading) => set({ loading }),
}), 'loading'));

const getLoading = (state) => state.loading;
const getSetLoading = (state) => state.setLoading;

export function useLoading () {
  return useLoadingStore(getLoading);
}

export function useSetLoading () {
  return useLoadingStore(getSetLoading);
}
