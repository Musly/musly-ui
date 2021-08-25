import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useGroupId } from '../../../app/group.store';
import { useSetNotification } from '../../../app/notification.store';
import IconTrash from '../../../icons/trash-2.svg';
import { Table, TableActions, TableBodyItemNoResults } from '../../../components/Table';
import { Loading } from '../../../components/Loading';
import { useConfirm } from '../../../components/Confirm';
import { ButtonSmall } from '../../../components/ButtonSmall';
import { SelectedCount } from '../../../components/SelectedCount';
import { useGenres, useSetGenres } from '../Genre.store';
import { FetchGenres, DeleteManyGenres } from '../Genre.graphql';
import { GenreItem } from './GenreItem';
import './GenreOverview.css';

export function GenreOverview () {
  const confirm = useConfirm();
  const notify = useSetNotification();
  const { t } = useTranslation('genre');
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState([]);
  const groupId = useGroupId();
  const genres = useGenres();
  const setGenres = useSetGenres();

  const { loading } = useQuery(FetchGenres, {
    variables: { groupId },
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      setGenres(data?.genres || []);
    },
  });

  const [deleteManyGenres] = useMutation(DeleteManyGenres, {
    refetchQueries: ['FetchGenres', 'FetchDashboard'],
    onCompleted: () => {
      setSelected([]);
      notify('success', t('delete.successMany'));
    },
    onError: () => {
      notify('error', t('delete.errorMany'));
    },
  });

  const titles = [
    {
      isCheckbox: true,
      checked: selected.length > 0,
      onChange: () => setSelected([]),
    },
    { value: t('overview.table.title') },
    { value: '' },
  ];

  const filteredData = filter ? genres.filter((item) => item.title.includes(filter)) : genres;

  function handleSelect (event) {
    if (!selected.includes(event.target.value)) {
      setSelected((prevState) => [
        ...prevState,
        event.target.value,
      ]);
    } else {
      setSelected((prevState) => prevState.filter((item) => item !== event.target.value));
    }
  }

  function handleDeleteSelected () {
    if (selected.length > 0) {
      confirm({
        content: t('delete.confirmMany'),
        onConfirm: () => deleteManyGenres({ variables: { ids: selected } }),
      });
    }
  }

  if (loading) {
    return (
      <Loading inline />
    );
  }

  return (
    <Table
      small
      titles={titles}
      actions={(
        <TableActions
          onChange={(event) => setFilter(event.target.value)}
          value={filter}
        >
          <SelectedCount count={selected.length} />
          <ButtonSmall disabled={selected.length === 0} onClick={handleDeleteSelected}>
            <IconTrash />
          </ButtonSmall>
        </TableActions>
      )}
    >
      {(filteredData.length > 0) ? filteredData.map((genre) => (
        <GenreItem
          key={genre.id}
          genreId={genre.id}
          onSelect={handleSelect}
          selected={selected.includes(genre.id)}
        />
      )) : (
        <TableBodyItemNoResults size={titles.length}>
          {t('overview.noResults')}
        </TableBodyItemNoResults>
      )}
    </Table>
  );
}
