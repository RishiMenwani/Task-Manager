import { ReactNode, memo, useEffect, useState } from 'react'
// import { LayoutProvider, useLayoutContext } from './model/LayoutProvider'
import { useMediaQuery } from '@/common/hooks/useMediaQuery'
import { bool2string } from '@/common/utils'
import styles from "./Layout.module.scss"
import { useLayoutContext, LayoutProvider } from '@/common/context/LayoutProvider'
import { Sidebar } from '../sidebar'

interface IProps {
    children?: ReactNode
}

function WrappedComponent({ children }: IProps) {
    const [mounted, setMounted] = useState(false)
    const { expanded } = useLayoutContext()
    const isDesktop = useMediaQuery('(min-width: 768px)')

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className={`${styles.wrapper} ${bool2string(expanded && isDesktop && mounted) ? styles.expanded : styles.collapsed}`} >
            <Sidebar expanded={expanded} isDesktop={isDesktop} />
            <div className={styles.content}>{children}</div>
        </div>
    )
}

export function Layout(props: IProps) {
    return (
        <LayoutProvider>
            <WrappedComponent {...props} />
        </LayoutProvider>
    )
}