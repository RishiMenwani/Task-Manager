import {
  Children,
  useCallback,
  useMemo,
  useRef,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  useLayoutEffect,
  ReactElement,
} from 'react'
import { useOutside } from '@/common/hooks/useOutside'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { SelectOption } from './SelectOption'
import { SelectProvider, useSelectContext } from '@/common/context/SelectProvider'
import styles from "./Select.module.scss"

interface IProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'onChange'
  > {
  value?: any
  onChange: (value: any) => void
  placeHolderText?: string
}

function WrappedComponent({
  value,
  children,
  placeHolderText = 'None',
  ...rest
}: Omit<IProps, 'onChange'>) {
  const labelRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const { expanded, viewNode, toggle, changeExpanded, changeValue } =
    useSelectContext()

  useOutside(
    [listRef as any, labelRef],
    useCallback(() => {
      changeExpanded(false)
    }, [changeExpanded])
  )

  useLayoutEffect(() => {
    Children.forEach(children, (child) => {
      const element = child as ReactElement
      if (element.type === SelectOption) {
        if (element.props.value === value) {
          changeValue(value, element.props.children)
        }
      }
    })
  }, [])

  const label = viewNode ?? placeHolderText

  const Icon = useMemo(
    () => (expanded ? FiChevronUp : FiChevronDown),
    [expanded]
  )

  return (
    <div style={{ position: "relative" }}>
      <button className={styles.selectLabel} type="button" ref={labelRef} onClick={toggle} {...rest}>
        <div className="flex-1 text-left" style={{ flex: 1, textAlign: "left" }}>{label}</div>
        <Icon className="ml-2 text-indigo-500" style={{ marginLeft: "15px" }} />
      </button>
      {expanded && <ul className={styles.selectList} ref={listRef}>{children}</ul>}
    </div>
  )
}

export function Select({ value, onChange, ...rest }: IProps) {
  return (
    <SelectProvider value={value} onChange={onChange}>
      <WrappedComponent value={value} {...rest} />
    </SelectProvider>
  )
}
