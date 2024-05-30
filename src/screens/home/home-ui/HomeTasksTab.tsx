import { TaskList } from '@/components/task/list'
import { ITable } from '@/common/models/ITable'
import { AddNewTaskButton } from './AddNewTaskButton'
import { ToggleMoreOptionsButton } from './ToggleMoreOptionsButton'
import { useRef } from 'react'
import { ListScroll } from './ListScroll'
import styles from "../Home.module.scss"
import { Header } from '@/components/layout/header'
import { HeaderTitleNoSSR } from '@/components/layout/header/HeaderTitle'

interface IProps {
  table: ITable
  tableIndex: number
}

export function HomeTasksTab({ table, tableIndex }: IProps) {
  const listRef = useRef<HTMLDivElement>(null)

  console.log('__tableIndex', tableIndex);
  console.log('__table', table);



  return (
    <main className={styles.layoutContent}>
      <Header>
        <HeaderTitleNoSSR>{table.title}</HeaderTitleNoSSR>
        <div className="flex items-center">
          <AddNewTaskButton table={table} tableIndex={tableIndex} />25
          <ToggleMoreOptionsButton table={table} tableIndex={tableIndex} />
        </div>
      </Header>
      <ListScroll listRef={listRef} />
      <div>
        <div className="overflow-hidden">
          <TaskList
            listRef={listRef}
            columns={table.columns}
            tableIndex={tableIndex}
          />
        </div>
      </div>
    </main>
  )
}
