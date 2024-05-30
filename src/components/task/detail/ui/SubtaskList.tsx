import { ISubtask } from '@/common/models/ISubtask'
import { SubtaskItem } from './SubtaskItem'
import { useAppDispatch } from '@/common/hooks/useRedux'
import { mainActions } from '@/store/slices/main'
import styles from "../TaskItemDetails.module.scss"

interface IProps {
  tableIndex: number
  columnIndex: number
  taskIndex: number
  subtasks: ISubtask[]
}

export function SubtaskList({
  tableIndex,
  columnIndex,
  taskIndex,
  subtasks,
}: IProps) {
  const dispatch = useAppDispatch()

  const handleToggleSubtask = (subtaskIndex: number) => () => {
    dispatch(
      mainActions.toggleSubtask({
        tableIndex,
        columnIndex,
        taskIndex,
        subtaskIndex,
      })
    )
  }
  return (
    <ul className={styles.subTaskListWrapper}>
      {subtasks.map((e, index) => (
        <SubtaskItem
          key={e.id}
          subtask={e}
          toggleSubtask={handleToggleSubtask(index)}
        />
      ))}
    </ul>
  )
}
