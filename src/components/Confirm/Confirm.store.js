import create from 'zustand';
import { devtools } from 'zustand/middleware';

const defaultState = {
  content: null,
  onConfirm: () => {},
  onCancel: () => {},
};

export const useConfirmStore = create(devtools((set) => ({
  confirm: defaultState,
  setConfirm: (confirm) => set({ confirm }),
  unsetConfirm: () => set({ confirm: defaultState }),
}), 'confirm'));

const { setConfirm } = useConfirmStore.getState();

export function useConfirm () {
  return function confirm (confirmData) {
    setConfirm({
      ...defaultState,
      ...confirmData,
    });
  };
}
