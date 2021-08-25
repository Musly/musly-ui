import create from 'zustand';
import store from 'store';
import { devtools } from 'zustand/middleware';

export const defaultState = {
  id: null,
  email: null,
  emailVerified: false,
  firstName: null,
  lastName: null,
  onboarded: false,
  rememberMe: false,
  token: null,
};

const initialState = store.get('musly.auth', defaultState);

export const useUserStore = create(devtools((set) => ({
  user: initialState,
  setUser: (user) => set({ user }),
  unsetUser: () => set({ user: defaultState }),
}), 'auth'));

useUserStore.subscribe((state) => {
  if (state.user.rememberMe) {
    store.set('musly.auth', state.user);
  } else {
    store.remove('musly.auth');
  }
});

const getUser = (state) => state.user;
const getSetUser = (state) => state.setUser;
const getUnsetUser = (state) => state.unsetUser;

export function useUser () {
  return useUserStore(getUser);
}

export function useSetUser () {
  return useUserStore(getSetUser);
}

export function useUnsetUser () {
  return useUserStore(getUnsetUser);
}

export function useUserId () {
  const user = useUser();
  return user.id || null;
}

export function useUserIsLoggedIn () {
  const user = useUser();
  return !!user.token;
}

export function useUserIsOnboarded () {
  const user = useUser();
  return user.onboarded || false;
}

export function useUserEmail () {
  const user = useUser();
  return user.email || null;
}

export function useUserDisplayName () {
  const user = useUser();
  const email = useUserEmail();

  if (user.displayName) {
    return user.displayName;
  }

  if (!user.firstName && !user.lastName) {
    return email;
  }

  return `${user.firstName} ${user.lastName}`.trim();
}
