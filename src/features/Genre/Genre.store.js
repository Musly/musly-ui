import { useCallback } from 'react';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useGenresStore = create(devtools((set) => ({
  genres: [],
  setGenres: (genres) => set({ genres }),
  unsetGenres: () => set({ genres: [] }),
}), 'genres'));

const getGenres = (state) => state.genres;
const getSetGenres = (state) => state.setGenres;
const getUnsetGenres = (state) => state.unseteGenres;

export function useGenres () {
  return useGenresStore(getGenres);
}

export function useSetGenres () {
  return useGenresStore(getSetGenres);
}

export function useUnsetGenres () {
  return useGenresStore(getUnsetGenres);
}

export function useGenreById (genreId) {
  return useGenresStore(
    useCallback((state) => (
      state.genres.find((genre) => genre.id === genreId) || null
    ), [genreId])
  );
}
