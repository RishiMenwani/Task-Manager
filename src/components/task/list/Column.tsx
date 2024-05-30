import { ITableColumn } from '@/common/models/ITableColumn'
import { TaskItem } from '../item/TaskItem'
import { DragEvent } from 'react'
import { useAppDispatch } from '@/common/hooks/useRedux'
import { mainActions } from '@/store/slices/main'
import { DRAG_TRANSFER_KEY } from '@/common/data/constants'
import styles from "./TaskList.module.scss"

interface IProps {
  column: ITableColumn
  columns: ITableColumn[]
  tableIndex: number
  columnIndex: number
}

export function Column({ column, columns, tableIndex, columnIndex }: IProps) {
  const { title, tasks } = column

  const dispatch = useAppDispatch()

  const handleOnDrop = (e: DragEvent<HTMLDivElement>) => {
    const { columnIndex: prevColumnIndex, taskIndex: dropTaskIndex } =
      JSON.parse(e.dataTransfer.getData(DRAG_TRANSFER_KEY))

    if (prevColumnIndex !== columnIndex) {
      dispatch(
        mainActions.changeTaskColumn({
          newColumnIndex: columnIndex,
          oldColumnIndex: prevColumnIndex,
          tableIndex,
          taskIndex: dropTaskIndex,
        })
      )
    }
  }

  const handleOnDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <div className={styles.columnWrapper} onDrop={handleOnDrop} onDragOver={handleOnDragOver}>
      <h4 className={styles.title}>{`${title} (${tasks.length})`}</h4>
      {tasks.map((task, taskIndex) => (
        <TaskItem
          key={task.id}
          tableIndex={tableIndex}
          columnIndex={columnIndex}
          taskIndex={taskIndex}
          task={task}
          columns={columns}
        />
      ))}
    </div>
  )
}
