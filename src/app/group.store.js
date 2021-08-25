import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useGroupStore = create(devtools((set) => ({
  group: null,
  setGroup: (group) => set({ group }),
}), 'group'));

const getGroup = (state) => state.group;
const getSetGroup = (state) => state.setGroup;

export function useGroup () {
  return useGroupStore(getGroup);
}

export function useSetGroup () {
  return useGroupStore(getSetGroup);
}

export function useManagerId () {
  const group = useGroup();
  return group?.manager.id || null;
}

export function useGroupId () {
  const group = useGroup();
  return group?.id || null;
}

export const useGroupsStore = create(devtools((set) => ({
  groups: [],
  setGroups: (groups) => set({ groups }),
}), 'groups'));

const getGroups = (state) => state.groups;
const getSetGroups = (state) => state.setGroups;

export function useGroups () {
  return useGroupsStore(getGroups);
}

export function useSetGroups () {
  return useGroupsStore(getSetGroups);
}
