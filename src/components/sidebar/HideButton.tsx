import { useLayoutContext } from '@/common/context/LayoutProvider';
import styles from './Sidebar.module.scss';
import { BiSolidHide, BiShow } from 'react-icons/bi'
import { Button } from '@/common/ui/button';

export function HideButton() {
    const { expanded, toggleExpanded } = useLayoutContext();

    return (
        <div className={`${styles.wrapper} ${expanded ? 'w-52' : ''}`}>
            <Button
                button_type={expanded ? 'transparent' : 'primary'}
                corner_type="none"
                onClick={toggleExpanded}
                className={`${styles.toggleButton} ${expanded ? styles.expanded : ''}`}
            >
                {expanded ? (
                    <BiSolidHide className="mr-2 text-inherit text-lg" />
                ) : (
                    <BiShow className="mr-2 text-inherit text-lg" />
                )}
                {expanded ? <span>Hide sidebar</span> : null}
            </Button>
        </div>
    );
}
