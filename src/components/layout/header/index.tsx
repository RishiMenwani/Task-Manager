import { ReactNode, useEffect, useState } from 'react'
import { Menu } from './Menu'
import { useMediaQuery } from '@/common/hooks/useMediaQuery'
import { useLayoutContext } from '@/common/context/LayoutProvider'
import styles from "./LayoutHeader.module.scss"

interface IProps {
  children?: ReactNode
}

export function Header({ children }: IProps) {
  const { expanded } = useLayoutContext()

  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className={`${styles.wrapper} ${(expanded && mounted && isDesktop) ? "expanded" : ''}`}>
      {children}
      <Menu open={open} setOpen={setOpen} />
    </header>

  )
}
