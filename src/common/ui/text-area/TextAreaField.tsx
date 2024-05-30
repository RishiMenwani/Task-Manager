
import { useTextAreaContext } from '@/common/context/TextAreaProvider'
import { DetailedHTMLProps, TextareaHTMLAttributes, useEffect } from 'react'
import styles from "./TextArea.module.scss"


interface IProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > { }

export function TextAreaField({ id, ...rest }: IProps) {
  const { setTextAreaId } = useTextAreaContext()

  useEffect(() => setTextAreaId(id), [id])

  return <textarea id={id} {...rest} className={styles.wrapper} />
}


