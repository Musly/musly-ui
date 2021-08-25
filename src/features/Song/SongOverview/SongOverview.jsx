import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useGroupId } from '../../../app/group.store';
import { useSongs, useSetSongs } from '../Song.store';
import { Table, TableActions, TableBodyItemNoResults } from '../../../components/Table';
import { Loading } from '../../../components/Loading';
import { FetchSongs } from '../Song.graphql';
import { SongItem } from './SongItem';

export function SongOverview () {
  const { t } = useTranslation('song');
  const [filter, setFilter] = useState('');
  const songs = useSongs();
  const setSongs = useSetSongs();
  const groupId = useGroupId();
  const [fetchSongs, { loading }] = useLazyQuery(FetchSongs, {
    variables: { groupId },
    onCompleted: (data) => {
      setSongs(data?.songs || []);
    },
  });

  useEffect(() => {
    fetchSongs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const titles = [
    { value: 'Title' },
    { value: 'Artist' },
    { value: 'Genre' },
    { value: 'Key' },
    { value: 'Duration' },
    { value: '' },
  ];

  const filteredData = filter ? songs.filter((item) => item.title.includes(filter)) : songs;

  if (loading) {
    return (
      <Loading inline />
    );
  }

  return (
    <Table
      titles={titles}
      actions={(
        <TableActions
          onChange={(event) => setFilter(event.target.value)}
          value={filter}
        />
      )}
    >
      {(filteredData.length > 0) ? filteredData.map((song) => (
        <SongItem songId={song.id} key={song.id} />
      )) : (
        <TableBodyItemNoResults size={titles.length}>
          {t('overview.noResults')}
        </TableBodyItemNoResults>
      )}
    </Table>
  );
}
