import { useState } from 'react';
import styles from './Sidebar.module.scss';

import brandLogoLight from '@/assets/brand/logo.svg';
import brandLogoDark from '@/assets/brand/logo.svg';
import Image from 'next/image';
import { useAppSelector } from '@/common/hooks/useRedux';

export function Logo() {
    const { theme } = useAppSelector((x) => x.themeSlice);
    const [logoSrc, setLogoSrc] = useState(theme === 'dark' ? brandLogoDark : brandLogoLight);

    const handleThemeChange = (newTheme: string) => {
        setLogoSrc(newTheme === 'dark' ? brandLogoDark : brandLogoLight);
    };

    return (
        <Image
            className={styles.brandLogo}
            src={logoSrc}
            alt="Brand logo"
            width={100}
            height={100}
            onLoad={() => handleThemeChange(theme)}
            style={{
                filter: theme === 'dark' ? 'invert(1)' : '',
            }}
        />
    );
}
