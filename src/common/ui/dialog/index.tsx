import React from 'react';
import { Portal } from '../portal';
import { Backdrop } from '../backdrop';
import styles from "./Dialog.module.scss"
import { Button } from '../button';

interface IProps {
  open: boolean;
  onClose: VoidFunction;
  title: string;
  subtitle: string;
  confirmText: string;
  cancelText: string;
  onConfirm?: VoidFunction;
  onCancel?: VoidFunction;
}

export const CustomDialog: React.FC<IProps> = ({
  open,
  onClose,
  title,
  subtitle,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}) => {

  console.log('__open,onClose', open,
    onClose,
    title,
    subtitle,
    confirmText,
    cancelText,
    onConfirm,
    onCancel,);

  return (
    open && (
      <Portal>
        <Backdrop className={styles.wrapper} onClose={onClose}>
          <div className={styles.modal}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
            <div className={styles.actionsRow}>
              <Button className={styles.confirmButton} onClick={onConfirm}>{confirmText}</Button>
              <Button className={styles.cancelButton} onClick={onCancel ?? onClose}>
                {cancelText}
              </Button>
            </div>
          </div>
        </Backdrop>
      </Portal>)
  );
}

