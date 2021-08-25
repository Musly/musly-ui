import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import TrashIcon from '../../../../icons/trash-2.svg';
import { useGenreById } from '../../Genre.store';
import { useSetNotification } from '../../../../app/notification.store';
import { TableBodyRow, TableBodyItem, TableBodyActions } from '../../../../components/Table';
import { ButtonSmall } from '../../../../components/ButtonSmall';
import { FormCheckbox } from '../../../../components/FormCheckbox';
import { Modal } from '../../../../components/Modal';
import { useConfirm } from '../../../../components/Confirm';
import { GenreEditor } from '../../GenreEditor';
import { DeleteGenre } from '../../Genre.graphql';

export function GenreItem ({ genreId, onSelect, selected }) {
  const { t } = useTranslation('genre');
  const genre = useGenreById(genreId);
  const confirm = useConfirm();
  const setNotification = useSetNotification();
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteGenre] = useMutation(DeleteGenre, {
    variables: { genreId },
    refetchQueries: ['FetchGenres'],
    onCompleted () {
      setNotification('info', t('delete.success', { genre: genre.title }));
    },
    onError () {
      setNotification('error', t('delete.error'));
    },
  });

  function toggleModal (event) {
    event?.preventDefault();
    setModalOpen((prevState) => !prevState);
  }

  function handleDelete () {
    confirm({
      content: t('delete.confirm', { genre: genre.title }),
      onConfirm: () => deleteGenre(),
    });
  }

  if (!genre) {
    return null;
  }

  return (
    <Fragment>
      <TableBodyRow>
        <TableBodyItem isCheckbox>
          <FormCheckbox onChange={onSelect} value={genreId} checked={selected} />
        </TableBodyItem>
        <TableBodyItem href={`/genres/${genre.id}`} title={t('overview.editTooltip')} onClick={toggleModal}>
          {genre.title}
        </TableBodyItem>
        <TableBodyActions>
          <ButtonSmall title={t('overview.deleteTooltip')} onClick={handleDelete}>
            <TrashIcon />
          </ButtonSmall>
        </TableBodyActions>
      </TableBodyRow>
      <Modal isOpen={modalOpen} onToggle={toggleModal}>
        <GenreEditor genreId={genre.id} />
      </Modal>
    </Fragment>
  );
}

GenreItem.propTypes = {
  genreId: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

GenreItem.defaultProps = {
  selected: false,
};
