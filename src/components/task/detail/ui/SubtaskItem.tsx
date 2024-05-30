import { ISubtask } from '@/common/models/ISubtask'
import { Checkbox } from '@/common/ui/checkbox'
import styles from "../TaskItemDetails.module.scss"

interface IProps {
  subtask: ISubtask
  toggleSubtask: VoidFunction
}

export function SubtaskItem({ subtask, toggleSubtask }: IProps) {
  return (
    <li className={styles.subTaskItemWrapper}>
      <Checkbox value={subtask.doing} onChange={toggleSubtask} />
      <span className={`${styles.subTaskItemTitle} ${subtask.doing ? styles.completed : ""}`}>{subtask.title}</span>
    </li>
  )
}

