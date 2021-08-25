import { useMemo } from 'react';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

const mockData = [
  {
    id: '1234', title: 'Let Me Entertain You', artist: 'Robbie Williams', genre: 'Rock', key: 'F', duration: '3:56',
  },
  {
    id: '2345', title: 'Proud Marry', artist: 'Tina Turner', genre: 'Pop', key: 'F', duration: '4:56',
  },
  {
    id: '3456', title: 'Let Me Entertain You', artist: 'Robbie Williams', genre: 'Rock', key: 'F', duration: '3:56',
  },
  {
    id: '4567', title: 'Proud Marry', artist: 'Tina Turner', genre: 'Pop', key: 'F', duration: '4:56',
  },
];

export const useSongsStore = create(devtools((set) => ({
  songs: mockData,
  setSongs: (songs) => set({ songs }),
  unsetSongs: () => set({ songs: [] }),
}), 'songs'));

const getSongs = (state) => state.songs;
const getSetSongs = (state) => state.setSongs;
const getUnsetSongs = (state) => state.unsetSongs;

export function useSongs () {
  return useSongsStore(getSongs);
}

export function useSetSongs () {
  return useSongsStore(getSetSongs);
}

export function useUnsetSongs () {
  return useUnsetSongs(getUnsetSongs);
}

export function useSongById (songId) {
  const songs = useSongs();
  return useMemo(() => songs.find((song) => song.id === songId) || null, [songId, songs]);
}
