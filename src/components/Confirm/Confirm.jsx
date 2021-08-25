import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '../Modal';
import { ButtonPrimary } from '../ButtonPrimary';
import { useConfirmStore } from './Confirm.store';
import './Confirm.css';

const getConfirm = (state) => state.confirm;
const { unsetConfirm } = useConfirmStore.getState();

export function Confirm () {
  const { t } = useTranslation('common');
  const confirm = useConfirmStore(getConfirm);
  const [showModal, setShowModal] = useState(!!confirm.content);

  useEffect(() => {
    setShowModal(!!confirm.content);
  }, [confirm.content]);

  function handleConfirm () {
    setShowModal((prevState) => !prevState);
    confirm.onConfirm();
  }

  function handleCancel () {
    setShowModal((prevState) => !prevState);
    confirm.onCancel();
  }

  return (
    <Modal isOpen={showModal} onClosed={() => unsetConfirm()}>
      <div className="confirm">
        <div className="confirm__content">
          {confirm.content}
        </div>
        <div className="confirm__actions">
          <ButtonPrimary onClick={handleCancel} color="gray">
            {t('cancel')}
          </ButtonPrimary>
          <ButtonPrimary onClick={handleConfirm}>
            {t('confirm')}
          </ButtonPrimary>
        </div>
      </div>
    </Modal>
  );
}
