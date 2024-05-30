import React from 'react';
import styles from './Button.module.scss';

type TButtonType = 'none' | 'transparent' | 'primary' | 'secondary';
type TCornerType = 'none' | 'rounded-full' | 'rounded';

interface IButtonProps {
    button_type?: TButtonType;
    corner_type?: TCornerType;
}

interface IProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > { }

export function Button(props: IProps & IButtonProps) {

    const { button_type: buttonType = 'primary', corner_type: cornerType = 'rounded-full', ...rest } = props;

    const generateClassName = () => {
        let classNames = [styles.button];
        if (buttonType && buttonType !== 'none') {
            classNames.push(styles[buttonType]);
        }
        if (cornerType && cornerType !== 'none') {
            classNames.push(styles[cornerType]);
        }
        return classNames.join(' ');
    };

    const className = generateClassName();

    return <button {...rest} className={className + ' ' + rest.className} />;
}
