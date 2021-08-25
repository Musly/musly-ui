import React from 'react';
import { useTranslation } from 'react-i18next';
import CheckIcon from '../../../icons/check.svg';
import { useGroupStore, useGroupsStore } from '../../../app/group.store';
import { Dropdown, DropdownMenu, DropdownItem } from '../../../components/Dropdown';
import { GroupSelectorToggle } from './GroupSelectorToggle';
import './GroupSelector.css';

const { setGroup } = useGroupStore.getState();
const getGroup = (state) => state.group;
const getGroups = (state) => state.groups;

export function GroupSelector () {
  const { t } = useTranslation('group');
  const groups = useGroupsStore(getGroups);
  const group = useGroupStore(getGroup);

  return (
    <div className="group-selector">
      <div className="group-selector__label">
        {t('groupSelector.label')}
      </div>
      <Dropdown>
        <GroupSelectorToggle />
        <DropdownMenu position="bottom-full">
          {groups.map((grp) => (
            <DropdownItem
              label={grp.title}
              onClick={() => setGroup(grp)}
              key={grp.id}
              active={grp.id === group.id}
              icon={grp.id === group.id ? <CheckIcon /> : null}
            />
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
