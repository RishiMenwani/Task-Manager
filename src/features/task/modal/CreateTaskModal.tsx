import { Modal, ModalTitle } from '@/common/ui/modal'
import { FormEvent, useState } from 'react'
import { Button } from '@/common/ui/button'
import { useAppDispatch } from '@/common/hooks/useRedux'
import { ISubtask } from '@/common/models/ISubtask'
import { mainActions } from '@/store/slices/main'
import { ITableColumn } from '@/common/models/ITableColumn'
import { TaskTitleField } from './ui/TaskTitleField'
import { TaskDescriptionField } from './ui/TaskDescriptionField'
import { TaskSubtasks } from './ui/TaskSubtasks'
import { TaskColumnSelect } from './ui/TaskColumnSelect'
import { v4 as uuid } from 'uuid'
import styles from "./taskModal.module.scss"

interface IProps {
  open: boolean
  onClose: VoidFunction
  columns: ITableColumn[]
  tableIndex: number
}

export function CreateTaskModal({
  open,
  onClose: handleClose,
  columns,
  tableIndex,
}: IProps) {
  const modalProps = { open, onClose: handleClose }

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [subtasks, setSubtasks] = useState<ISubtask[]>([])
  const [selectedColumnIndex, setSelectedColumnIndex] = useState(0)

  const dispatch = useAppDispatch()

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(
      mainActions.addTask({
        tableIndex,
        columnIndex: selectedColumnIndex,
        task: {
          id: uuid(),
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
        <ModalTitle className="mb-7">Add new task</ModalTitle>
        <TaskTitleField title={title} setTitle={setTitle} />
        <TaskDescriptionField
          description={description}
          setDescription={setDescription}
        />
        <h3 className={styles.tasksTitle}>Sub tasks</h3>
        <TaskSubtasks subtasks={subtasks} setSubtasks={setSubtasks} />
        <TaskColumnSelect
          columns={columns}
          selectedIndex={selectedColumnIndex}
          setSelectedIndex={setSelectedColumnIndex}
        />
        <Button type="submit" button_type="primary" className={styles.createButton}>
          Create new task
        </Button>
      </form>
    </Modal>
  )
}

