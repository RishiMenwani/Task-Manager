
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { useMediaQuery } from '@/common/hooks/useMediaQuery'
import { Menu } from './Menu'
import dynamic from 'next/dynamic'
import styles from "./LayoutHeader.module.scss"

interface IProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
    'onClick'
  > { }

export function HeaderTitle({ children, ...rest }: IProps) {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')

  const handleOpenMenu = () => {
    if (isMobile) {
      setOpen(true)
    }
  }

  return (
    <>
      <h2 className={styles.wrapper} {...rest} onClick={handleOpenMenu}>
        {children}
        {isMobile ? <FiChevronDown className="ml-1 mt-[2px]" /> : null}
      </h2>
      <Menu open={open} setOpen={setOpen} />
    </>
  )
}

export const HeaderTitleNoSSR = dynamic(() => Promise.resolve(HeaderTitle), {
  ssr: false,
})

