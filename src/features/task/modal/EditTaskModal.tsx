import { Modal, ModalTitle } from '@/common/ui/modal'
import { FormEvent, useState } from 'react'
import { Button } from '@/common/ui/button'
import { useAppDispatch } from '@/common/hooks/useRedux'
import { ISubtask } from '@/common/models/ISubtask'
import { mainActions } from '@/store/slices/main'
import { TaskTitleField } from './ui/TaskTitleField'
import { TaskDescriptionField } from './ui/TaskDescriptionField'
import { TaskSubtasks } from './ui/TaskSubtasks'
import { TaskColumnSelect } from './ui/TaskColumnSelect'
import { ITask } from '@/common/models/ITask'
import { ITableColumn } from '@/common/models/ITableColumn'
import styles from "./taskModal.module.scss"

interface IProps {
  open: boolean
  onClose: VoidFunction
  tableIndex: number
  columnIndex: number
  taskIndex: number
  task: ITask
  columns: ITableColumn[]
}

export function EditTaskModal({
  open,
  onClose: handleClose,
  tableIndex,
  columnIndex,
  taskIndex,
  task,
  columns,
}: IProps) {
  const modalProps = { open, onClose: handleClose }

  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)
  const [subtasks, setSubtasks] = useState<ISubtask[]>(task.subtasks)
  const [selectedColumnIndex, setSelectedColumnIndex] = useState(columnIndex)

  const dispatch = useAppDispatch()

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(
      mainActions.updateTask({
        tableIndex,
        oldColumnIndex: columnIndex,
        newColumnIndex: selectedColumnIndex,
        taskIndex,
        task: {
          ...task,
          title,
          description,
          subtasks,
        },
      })
    )

    handleClose()
  }

  return (
    <Modal {...modalProps}>
      <form onSubmit={handleOnSubmit}>
        <ModalTitle style={{ marginBottom: "35px" }}>Edit task</ModalTitle>
        <TaskTitleField title={title} setTitle={setTitle} />
        <TaskDescriptionField
          description={description}
          setDescription={setDescription}
        />
        <h3 className={styles.editTasksTitle}>Sub tasks</h3>
        <TaskSubtasks subtasks={subtasks} setSubtasks={setSubtasks} />
        <TaskColumnSelect
          columns={columns}
          selectedIndex={selectedColumnIndex}
          setSelectedIndex={setSelectedColumnIndex}
        />
        <Button type="submit" button_type="primary" className={styles.createButton}>
          Save changes
        </Button>
      </form>
    </Modal>
  )
}

