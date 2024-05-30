import { DetailedHTMLProps, HTMLAttributes, ReactNode, useEffect } from 'react';
import { Modal as MuiModal } from '@mui/material';
import styles from './Modal.module.scss';

interface IProps {
    open: boolean;
    onClose: VoidFunction;
    children?: ReactNode | ((props: { onClose: VoidFunction }) => ReactNode);
    className?: string;
}

function WrappedComponent({ onClose, children, className }: Omit<IProps, 'open'>) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const handleClose = () => {
        onClose();
    };

    return (
        <MuiModal open onClose={handleClose} className={styles.backdrop}>
            <div className={`${styles.modalWrapper} ${className}`}>
                {typeof children === 'function'
                    ? children({ onClose: handleClose })
                    : children}
            </div>
        </MuiModal>
    );
}

export function Modal({ open, children, onClose, className, ...rest }: IProps) {
    return open ? (
        <WrappedComponent onClose={onClose} className={className} {...rest}>
            {children}
        </WrappedComponent>
    ) : null;
}

interface IModalTitleProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> { }

export function ModalTitle({ children, ...rest }: IModalTitleProps) {
    return <h2 className={styles.customTitle} {...rest}>{children}</h2>;
}
