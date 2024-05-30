import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from "./BackDrop.module.scss"

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onClose: VoidFunction
}

export function Backdrop({ onClose, children, ...rest }: IProps) {
  return (
    <div {...rest} className={styles.wrapper}>
      <div className={styles.backdropComponent} onClick={onClose} />
      {children}
    </div>
  )
}
