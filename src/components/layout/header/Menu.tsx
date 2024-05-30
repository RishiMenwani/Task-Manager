
import { Backdrop } from '@/common/ui/backdrop'
import { Dispatch, SetStateAction } from 'react'
import { ThemeSwitch } from '@/features/theme/switcher'
import { TableList } from '@/components/table/list'
import styles from "./LayoutHeader.module.scss"

interface IProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export function Menu({ open, setOpen }: IProps) {
  const handleClose = () => {
    setOpen(false)
  }

  return open ? (
    <div className={styles.menuWrapper}>
      <Backdrop className="bg-black/50" onClose={handleClose} />
      <div className={styles.menuList}>
        <div className="px-5">
          <TableList />
        </div>
        <ThemeSwitch />
      </div>
    </div>
  ) : null
}
