
import { ThemeSwitch } from '@/features/theme/switcher'
import { bool2string, string2bool } from '@/common/utils'
import { useEffect, useState } from 'react'
import { Logo } from './Logo'
import { HideButton } from './HideButton'
import { TableList } from '../table/list'
import styles from "./Sidebar.module.scss"

interface IProps {
    expanded: boolean
    isDesktop: boolean
}

export function Sidebar({ expanded, isDesktop }: IProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (mounted && !isDesktop) {
        return null
    }

    return (
        <>
            <div className={styles.sidebarWrapper}>
                <div className={`${styles.wrapper} ${bool2string(expanded) === 'true' ? styles.expanded : ''}`}>
                    <div>
                        <Logo />
                        <TableList />
                    </div>
                    <div className="mb-16 pr-2">
                        <ThemeSwitch />
                    </div>
                </div>
            </div>
            <HideButton />
        </>
    )
}