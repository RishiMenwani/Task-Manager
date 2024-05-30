import { ITableColumn } from '@/common/models/ITableColumn'
import { ITask } from '@/common/models/ITask'
import { Modal } from '@/common/ui/modal'
import { ToggleMoreOptionsButton } from './ui/ToggleMoreOptionsButton'
import { SubtaskList } from './ui/SubtaskList'
import { TaskSelect } from './ui/TaskSelect'
import styles from "./TaskItemDetails.module.scss"

interface IProps {
  open: boolean
  onClose: VoidFunction
  tableIndex: number
  columnIndex: number
  taskIndex: number
  task: ITask
  columns: ITableColumn[]
}

export function DetailTaskModal({
  open,
  onClose,
  tableIndex,
  columnIndex,
  taskIndex,
  task,
  columns,
}: IProps) {
  const modalProps = { open, onClose }

  return (
    <Modal {...modalProps}>
      <div className={styles.header}>
        <h2 className={styles.title}>{task.title}</h2>
        <ToggleMoreOptionsButton
          tableIndex={tableIndex}
          columnIndex={columnIndex}
          taskIndex={taskIndex}
          task={task}
          columns={columns}
        />
      </div>
      {task.description && <p className={styles.description
      }>{task.description}</p>}
      <SubtaskList
        tableIndex={tableIndex}
        columnIndex={columnIndex}
        taskIndex={taskIndex}
        subtasks={task.subtasks}
      />
      <TaskSelect
        tableIndex={tableIndex}
        columnIndex={columnIndex}
        taskIndex={taskIndex}
        columns={columns}
      />
    </Modal>
  )
}

