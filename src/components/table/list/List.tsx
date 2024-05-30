
import { TableListItem } from './ListItem'
import { useAppDispatch, useAppSelector } from '@/common/hooks/useRedux'
import { mainActions } from '@/store/slices/main'
import styles from "./TableList.module.scss"
import Link from 'next/link'

export function TableList() {
  const { tables, selectedTableIndex } = useAppSelector((x) => x.mainSlice)
  const dispatch = useAppDispatch()

  const handleOnSelect = (index: number) => () => {
    dispatch(mainActions.updateSelectedTableIndex({ tableIndex: index }))
  }

  const titleContent: Record<number, string> = {
    1: `All board (${tables.length})`,
    0: 'Empty list',
  }


  return (
    <>
      <h3 className={styles.title}>{titleContent[Number(tables.length > 0)]}</h3>
      <div className={styles.list}>
        {tables.map((e, i) => {
          const isActive = selectedTableIndex === i

          return (
            <Link href={`board/${e.id}`}>
              <TableListItem
                key={e.id}
                table={e}
                isActive={isActive}
                onClick={handleOnSelect(i)}
              />
            </Link>
          )
        })}
      </div>
    </>
  )
}


