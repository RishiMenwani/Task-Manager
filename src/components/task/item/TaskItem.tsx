import { ITask } from '@/common/models/ITask'
import { DetailTaskModal } from '../detail'
import { ITableColumn } from '@/common/models/ITableColumn'
import { useMemo, useState, DragEvent } from 'react'
import { DRAG_TRANSFER_KEY } from '@/common/data/constants'
import styles from "./TaskItem.module.scss"

interface IProps {
  tableIndex: number
  columnIndex: number
  taskIndex: number
  task: ITask
  columns: ITableColumn[]
}

export function TaskItem({
  tableIndex,
  columnIndex,
  taskIndex,
  task,
  columns,
}: IProps) {
  const [open, setOpen] = useState(false)

  const subtasksLength = task.subtasks.length
  const subtaskCompletedLength = useMemo(
    () => task.subtasks.filter((x) => x.doing).length,
    [task.subtasks]
  )

  const subtitle = `${subtaskCompletedLength} of ${subtasksLength} subtasks`

  const handleOnClose = () => {
    setOpen(false)
  }

  const handleOnOpen = () => {
    setOpen(true)
  }

  const handleOnDragStart = (e: DragEvent<HTMLDivElement>) => {
    const text = JSON.stringify({
      taskIndex,
      columnIndex,
    })
    e.dataTransfer.setData(DRAG_TRANSFER_KEY, text)
  }

  return (
    <>
      <div className={styles.wrapper}
        onClick={handleOnOpen}
        onDragStart={handleOnDragStart}
        draggable={true}
      >
        <h3 className={styles.title}>{task.title}</h3>
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
      <DetailTaskModal
        open={open}
        onClose={handleOnClose}
        tableIndex={tableIndex}
        columnIndex={columnIndex}
        taskIndex={taskIndex}
        task={task}
        columns={columns}
      />
    </>
  )
}
