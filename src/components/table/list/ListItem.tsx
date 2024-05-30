import { ITable } from '@/common/models/ITable'
import { GoProjectRoadmap } from 'react-icons/go'
import styles from "./TableList.module.scss"

interface IProps {
  table: ITable
  isActive: boolean
  onClick: VoidFunction
}

export function TableListItem({ table, isActive, onClick }: IProps) {
  const { title } = table

  return (
    <button
      className={`${styles.listItemWrapper} ${isActive ? styles.active : styles.inactive}`}
      onClick={onClick}
    >
      <GoProjectRoadmap className={styles.listItemIcon} />
      {title}
    </button>
  )
}