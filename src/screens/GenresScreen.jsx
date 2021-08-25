import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PlusIcon from '../icons/plus-circle.svg';
import TagIcon from '../icons/tag.svg';
import { View, ViewHeader, ViewContent } from '../components/View';
import { Modal } from '../components/Modal';
import { ButtonPrimary } from '../components/ButtonPrimary';
import { GenreOverview } from '../features/Genre/GenreOverview';
import { GenreEditor } from '../features/Genre/GenreEditor';

export function GenresScreen () {
  const { t } = useTranslation('genre');
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View title={t('overview.title')}>
      <ViewHeader
        headline={t('overview.headline')}
        subline={t('overview.description')}
        icon={<TagIcon />}
      >
        <ButtonPrimary size="lg" onClick={() => setModalOpen(true)}>
          <span className="text-xl mr-2">
            <PlusIcon />
          </span>
          {t('overview.addBtn')}
        </ButtonPrimary>
      </ViewHeader>
      <ViewContent>
        <GenreOverview />
      </ViewContent>
      <Modal isOpen={modalOpen} onToggle={() => setModalOpen((prevState) => !prevState)}>
        <GenreEditor onSuccess={() => setModalOpen((prevState) => !prevState)} />
      </Modal>
    </View>
  );
}
