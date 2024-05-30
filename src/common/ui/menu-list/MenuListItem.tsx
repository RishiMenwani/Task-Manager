
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import styles from "./Menu.module.scss"

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > { }

export function MenuListItem(props: IProps) {
  return <button className={styles.menuListItemWrapper} {...props} />
}

