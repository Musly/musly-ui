import React from 'react';
import PropTypes from 'prop-types';
import { useSongById } from '../../Song.store';
import { TableBodyRow, TableBodyItem } from '../../../../components/Table';

export function SongItem ({ songId }) {
  const song = useSongById(songId);

  if (!song) {
    return null;
  }

  return (
    <TableBodyRow>
      <TableBodyItem href={`/songs/${song.id}`} title={song.title}>
        {song.title}
      </TableBodyItem>
      <TableBodyItem>
        {song.artist}
      </TableBodyItem>
      <TableBodyItem>
        {song.genre}
      </TableBodyItem>
      <TableBodyItem>
        {song.key}
      </TableBodyItem>
      <TableBodyItem>
        {song.duration}
      </TableBodyItem>
    </TableBodyRow>
  );
}

SongItem.propTypes = {
  songId: PropTypes.string.isRequired,
};
