import { ITableColumn } from '@/common/models/ITableColumn'
// import tw from 'tailwind-styled-components'
import { Column } from './Column'
import { RefObject } from 'react'
import styles from "./TaskList.module.scss"

interface IProps {
  listRef: RefObject<HTMLDivElement>
  columns: ITableColumn[]
  tableIndex: number
}

export function TaskList({ listRef, columns, tableIndex }: IProps) {
  return (
    <div className={styles.wrapper} ref={listRef}>
      {columns.map((column, columnIndex) => (
        <Column
          key={column.id}
          column={column}
          columns={columns}
          tableIndex={tableIndex}
          columnIndex={columnIndex}
        />
      ))}
    </div>
  )
}
