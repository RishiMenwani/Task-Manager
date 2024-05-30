
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { useToggler } from '@/common/hooks/useToggler'
import { CreateTableModal } from '../../../features/table/modal/CreateTableModal'
import styles from "./TableList.module.scss"

export function CreateTableButton() {
  const [visibility, toggle] = useToggler(false)

  return (
    <>
      <button className={styles.wrapper} onClick={toggle}>
        <AiOutlinePlusSquare className={styles.icon} />
        Create new board
      </button>
      <CreateTableModal open={visibility} onClose={toggle} />
    </>
  )
}

