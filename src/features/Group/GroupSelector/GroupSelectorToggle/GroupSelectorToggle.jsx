import React from 'react';
import ChevronDownIcon from '../../../../icons/chevron-down.svg';
import { useGroupStore } from '../../../../app/group.store';
import '../GroupSelector.css';

const getGroup = (state) => state.group;

export function GroupSelectorToggle () {
  const group = useGroupStore(getGroup);

  return (
    <div className="group-selector__toggle">
      <div className="group-selector__title">
        {group.title}
      </div>
      <div className="group_selector__chevron">
        <ChevronDownIcon />
      </div>
    </div>
  );
}
