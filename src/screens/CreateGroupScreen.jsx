import React from 'react';
import './CreateGroupScreen.css';
import { CreateGroup } from '../features/Group/CreateGroup';

export function CreateGroupScreen () {
  return (
    <article className="create-group">
      <CreateGroup />
    </article>
  );
}
