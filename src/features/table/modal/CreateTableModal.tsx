
import { Button } from '@/common/ui/button'
import { FormEvent, useRef, useState } from 'react'
import { DEFAULT_COLUMNS_VALUES } from '@/common/data/constants'
import { useAppDispatch } from '@/common/hooks/useRedux'
import { ITableColumn } from '@/common/models/ITableColumn'
import { TableTitleField } from './ui/TableTitleField'
import { TableColumns } from './ui/TableColumns'
import { v4 as uuid } from 'uuid'
import { mainActions } from '@/store/slices/main'
import styles from './TableModal.module.scss';
import { Modal, ModalTitle } from '@/common/ui/modal'

interface IProps {
  open: boolean
  onClose: VoidFunction
}

export function CreateTableModal(props: IProps) {
  const ref = useRef<HTMLFormElement>(null)

  const [title, setTitle] = useState('')
  const [columns, setColumns] = useState<ITableColumn[]>(DEFAULT_COLUMNS_VALUES)

  const dispatch = useAppDispatch()

  // const { onClose: handleClose } = props
  const { open, onClose } = props;

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(
      mainActions.addTable({
        id: uuid(),
        title,
        columns,
      })
    )
    console.log('__ref.current', ref.current);


    ref.current!.reset()

    onClose()
  }


  return (
    <Modal open={open} onClose={onClose}>
      <form className={styles.form} onSubmit={handleOnSubmit} ref={ref}>
        <ModalTitle>Add new table</ModalTitle>
        <TableTitleField title={title} setTitle={setTitle} />
        <div className={styles.columnsTitle} >Table columns</div >
        <TableColumns columns={columns} setColumns={setColumns} />
        <Button type="submit" className={styles.btn} button_type="primary">
          Create new table
        </Button>
      </form>
    </Modal>
  )
}

