import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import LogoDark from '../../../icons/logo-dark.svg';
import { Panel } from '../../../components/Panel';
import { FormInput } from '../../../components/FormInput';
import { FormSelect } from '../../../components/FormSelect';
import { ButtonPrimary } from '../../../components/ButtonPrimary';
import GC from '../Group.constants';
import { useUserId } from '../../../app/user.store';
import { logger } from '../../../common/logger';
import { CreateGroup as CreateGroupMutation } from '../Group.graphql';
import './CreateGroup.css';

export function CreateGroup () {
  const { t } = useTranslation('group');
  const [title, setTitle] = useState('');
  const [type, setType] = useState(GC.TYPE_BAND);
  const [createGroup] = useMutation(CreateGroupMutation);
  const managerId = useUserId();

  const typeItems = [
    { value: GC.TYPE_BAND, label: t(`types.${GC.TYPE_BAND}`) },
    { value: GC.TYPE_ORCHESTRA, label: t(`types.${GC.TYPE_ORCHESTRA}`) },
    { value: GC.TYPE_CHOIR, label: t(`types.${GC.TYPE_CHOIR}`) },
    { value: GC.TYPE_INDIVIDUAL, label: t(`types.${GC.TYPE_INDIVIDUAL}`) },
    { value: GC.TYPE_OTHER, label: t(`types.${GC.TYPE_OTHER}`) },
  ];

  async function handleSubmit (event) {
    event.preventDefault();

    try {
      await createGroup({
        variables: { title, type, managerId },
        refetchQueries: ['GetGroups'],
      });
    } catch (error) {
      logger.error(error);
    }
  }

  return (
    <div className="create-group__wrapper">
      <div className="mb-24">
        <LogoDark />
      </div>
      <div className="create-group__headline">
        {t('create.headline')}
      </div>
      <div className="create-group__description">
        {t('create.description')}
      </div>
      <div className="create-group__content">
        <Panel>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <FormInput
                type="string"
                placeholder={t('create.name.placeholder')}
                label={t('create.name.label')}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className="mb-8">
              <FormSelect
                label={t('create.type.label')}
                value={type}
                options={typeItems}
                onChange={(event) => setType(event.target.value)}
              />
            </div>
            <ButtonPrimary type="submit" full size="lg">
              Create Group
            </ButtonPrimary>
          </form>
        </Panel>
      </div>
    </div>
  );
}
