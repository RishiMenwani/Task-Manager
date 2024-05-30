import { Button } from '@/common/ui/button'
// import { MenuList } from '@/common/ui/menu-list'
import { useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { CiSquareMore } from 'react-icons/ci'
import { ITableColumn } from '@/common/models/ITableColumn'
import { ITask } from '@/common/models/ITask'
import { EditTaskModal, DeleteTaskModal } from '@/features/task'
import { Menu, MenuList } from '@mui/material'
import styles from "../TaskItemDetails.module.scss"

interface IProps {
  tableIndex: number
  columnIndex: number
  taskIndex: number
  task: ITask
  columns: ITableColumn[]
}

export function ToggleMoreOptionsButton({
  tableIndex,
  columnIndex,
  taskIndex,
  task,
  columns,
}: IProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)

  const open = Boolean(anchorEl)
  console.log('__anchorEl', anchorEl, open);


  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleCloseEditModal = () => {
    setOpenEditModal(false)
  }

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false)
  }

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(true)
    handleClose()
  }

  const handleOpeEditModal = () => {
    setOpenEditModal(true)
    handleClose()
  }

  return (
    <>
      <Button
        className={styles.button}
        button_type="none"
        corner_type="rounded"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <CiSquareMore />
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} >
        <MenuList onClick={handleOpeEditModal} style={{ cursor: "pointer", padding: "10px" }} >
          <BiEdit style={{ marginRight: "10px" }} />
          Edit task
        </MenuList>
        <MenuList onClick={handleOpenDeleteDialog} style={{ color: "#ef4444", cursor: "pointer", padding: "10px" }} >
          <RiDeleteBin5Line style={{ marginRight: "10px" }} />
          Delete task
        </MenuList>
      </Menu>
      {openEditModal ? (
        <EditTaskModal
          open={openEditModal}
          onClose={handleCloseEditModal}
          tableIndex={tableIndex}
          columnIndex={columnIndex}
          taskIndex={taskIndex}
          task={task}
          columns={columns}
        />
      ) : null}
      {openDeleteDialog ? (
        <DeleteTaskModal
          open={openDeleteDialog}
          onClose={handleCloseDeleteDialog}
          tableIndex={tableIndex}
          columnIndex={columnIndex}
          taskIndex={taskIndex}
          taskTitle={task.title}
        />
      ) : null}
    </>
  )
}
