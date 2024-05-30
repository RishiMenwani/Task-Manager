import styles from "./Checkbox.module.scss"
import { FaCheck } from 'react-icons/fa'

interface IProps {
  id?: string
  value: boolean
  onChange: (value: boolean) => void
  className?: string
}

export function Checkbox({ id, value, onChange, className }: IProps) {
  const handleOnClick = () => {
    onChange(!value)
  }

  return (
    <div
      id={id}
      className={`${styles.wrapper} ${(value) ? "isActive" : ""}`}
      onClick={handleOnClick}
    >
      <input style={{ display: "none" }} value={value.toString()} type="checkbox" />
      {value && <FaCheck />}
    </div>
  )
}


