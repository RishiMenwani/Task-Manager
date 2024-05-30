
import { useTextAreaContext } from '@/common/context/TextAreaProvider'
import { DetailedHTMLProps, LabelHTMLAttributes } from 'react'
import styles from "./TextArea.module.scss"

interface IProps
  extends Omit<
    DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>,
    'htmlFor'
  > { }

export function TextAreaLabel(props: IProps) {
  const { textAreaId } = useTextAreaContext()

  return <label htmlFor={textAreaId} {...props} className={styles.labelWrapper} />
}
