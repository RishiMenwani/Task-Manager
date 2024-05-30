
import { DetailedHTMLProps, LabelHTMLAttributes } from 'react'
import styles from "./Input.module.scss"
import { useInputContext } from '@/common/context/InputProvider'

interface IProps
  extends Omit<
    DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>,
    'htmlFor'
  > { }

export function InputLabel(props: IProps) {
  const { inputId } = useInputContext()

  return <label className={styles.inputLabelWrapper} htmlFor={inputId} {...props} />
}

