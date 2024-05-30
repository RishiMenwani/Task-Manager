
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  useEffect,
} from 'react'
import { useInputContext } from '@/common/context/InputProvider'
import styles from "./Input.module.scss"

interface IProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'ref'
  > { }

export const InputField = forwardRef<HTMLInputElement, IProps>(
  ({ id, ...rest }, ref) => {
    const { setInputId } = useInputContext()

    useEffect(() => setInputId(id), [id])

    return <input ref={ref} id={id} {...rest} className={styles.inputFieldWrapper} />
  }
)

InputField.displayName = 'InputField'

