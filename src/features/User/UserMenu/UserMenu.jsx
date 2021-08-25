import React from 'react';
import { useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import {
  useUserDisplayName, useUserEmail, useUnsetUser, useUserId,
} from '../../../app/user.store';
import { useManagerId } from '../../../app/group.store';
import { useSetNotification } from '../../../app/notification.store';
import { logger } from '../../../common/logger';
import ChevronDownIcon from '../../../icons/chevron-down.svg';
import UserIcon from '../../../icons/user.svg';
import SettingsIcon from '../../../icons/settings.svg';
import LogOutIcon from '../../../icons/log-out.svg';
import {
  Dropdown, DropdownMenu, DropdownItem, DropdownSeparator,
} from '../../../components/Dropdown';
import { Avatar } from '../../../components/Avatar';
import { LogoutUser } from '../User.graphql';
import UC from '../User.constants';
import './UserMenu.css';

export function UserMenu () {
  const { t } = useTranslation('user');
  const email = useUserEmail();
  const displayName = useUserDisplayName();
  const userId = useUserId();
  const managerId = useManagerId();
  const [logout, { client }] = useMutation(LogoutUser);
  const unsetUser = useUnsetUser();
  const setNotification = useSetNotification();

  async function handleLogout (event) {
    event.preventDefault();

    try {
      await logout();
      client.clearStore();
      unsetUser();
      setNotification('success', 'You have been logged out.');
    } catch (error) {
      logger.error(error);
      setNotification('error', 'You could not be logged out!');
    }
  }

  return (
    <div className="user-menu">
      <Dropdown>
        <div className="user-menu__toggle">
          <div className="user-menu__avatar">
            <Avatar email={email} title={displayName} online />
          </div>
          <div className="user-menu__titles">
            <div className="user-menu__titles__type">
              {t(`types.${(userId === managerId) ? UC.TYPE_MANAGER : UC.TYPE_MEMBER}`)}
            </div>
            <div className="user-menu__titles__name">
              {displayName}
            </div>
          </div>
          <div className="user-menu__chevron">
            <ChevronDownIcon />
          </div>
        </div>
        <DropdownMenu>
          <DropdownItem label="Profile" url="/profile" icon={<UserIcon />} />
          <DropdownItem label="Settings" url="/settings" icon={<SettingsIcon />} />
          <DropdownSeparator />
          <DropdownItem label="Logout" url="/login" icon={<LogOutIcon />} onClick={handleLogout} />
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
