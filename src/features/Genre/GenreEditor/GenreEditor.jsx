import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import { useGroupId } from '../../../app/group.store';
import { useSetNotification } from '../../../app/notification.store';
import { FormInput } from '../../../components/FormInput';
import { Loading } from '../../../components/Loading';
import { ButtonPrimary } from '../../../components/ButtonPrimary';
import { useGenreById } from '../Genre.store';
import { CreateGenre } from '../Genre.graphql';

export function GenreEditor ({ genreId, onSuccess }) {
  const { t } = useTranslation('genre');
  const genre = useGenreById(genreId);
  const [title, setTitle] = useState(genre?.title || null);
  const groupId = useGroupId();
  const setNotification = useSetNotification();

  const [creatGenre, { loading }] = useMutation(CreateGenre, {
    refetchQueries: ['FetchGenres'],
    onCompleted () {
      onSuccess();
      setNotification('success', t('add.success', { genre: title }));
    },
    onError () {
      setNotification('error', t('add.error'));
    },
  });

  function handleSubmit (event) {
    event.preventDefault();
    creatGenre({ variables: { groupId, title } });
  }

  if (loading) {
    return (
      <Loading inline />
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <FormInput
          type="text"
          placeholder={t('add.placeholder')}
          label={t('add.label')}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <ButtonPrimary type="submit">
        {t('add.submitBtn')}
      </ButtonPrimary>
    </form>
  );
}

GenreEditor.propTypes = {
  genreId: PropTypes.string,
  onSuccess: PropTypes.func,
};

GenreEditor.defaultProps = {
  genreId: null,
  onSuccess: () => {},
};
