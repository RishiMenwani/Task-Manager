import { useSelectContext } from '@/common/context/SelectProvider'
import { DetailedHTMLProps, LiHTMLAttributes, useCallback } from 'react'
import styles from "./Select.module.scss"

interface IProps<T>
  extends Omit<
    DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>,
    'value' | 'onClick'
  > {
  value: T
}

export function SelectOption<T>({ value, children, ...rest }: IProps<T>) {
  const {
    value: selectedValue,
    changeValue,
    changeExpanded,
  } = useSelectContext()

  const handleOnClick = useCallback(() => {
    changeValue(value, children)
    changeExpanded(false)
  }, [value, children, changeValue, changeExpanded])

  const isSelected = value === selectedValue

  return (
    <li
      onClick={handleOnClick}
      {...rest}
      className={`${styles.selectOptionWrapper} ${isSelected ? "isSelected" : ''}`}
    >
      {children}
    </li>
  )
}

