import { Button } from '@/common/ui/button'
import { Input, InputField } from '@/common/ui/input'
import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react'
import { AiOutlineCloseSquare, AiOutlinePlusSquare } from 'react-icons/ai'
import styles from "./FieldArray.module.scss"
import { CiCircleRemove } from "react-icons/ci";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

interface IItem {
  id: string
  [key: string]: any
}

interface IProps<T extends IItem, K extends keyof T> {
  values: T[]
  setValues: Dispatch<SetStateAction<T[]>>
  titleSelector: K
  addValue: (value: string) => void
  removeValue: (index: number) => void
}

export function FieldArray<T extends IItem, K extends keyof T>({
  values,
  setValues,
  titleSelector,
  addValue,
  removeValue,
}: IProps<T, K>) {
  const handleOnChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const newValues = [...values]
      newValues[index] = {
        ...newValues[index],
        [titleSelector]: e.target.value,
      } as T

      setValues(newValues)
    }

  const handleRemoveItem = (index: number) => () => {
    removeValue(index)
  }

  return (
    <div className={styles.wrapper}>
      {values.map((e, i) => (
        <div key={e.id} className={styles.inputWrapper}>
          <Input>
            <InputField value={e.title} onChange={handleOnChange(i)} />
          </Input>
          <Button
            className={styles.actionButton}
            type="button"
            button_type="none"
            corner_type="rounded"
            onClick={handleRemoveItem(i)}
          >
            {/* <AiOutlineCloseSquare className="text-indigo-500 text-xl" /> */}
            <RemoveIcon sx={{ fontSize: 20 }} />
          </Button>
        </div>
      ))}
      <AddColumnField addColumn={addValue} />
    </div>
  )
}

const AddColumnField = ({
  addColumn,
}: {
  addColumn: (value: string) => void
}) => {
  const [title, setTitle] = useState('')

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleAddItem = () => {
    addColumn(title)
    setTitle('')
  }

  return (
    <div className={styles.inputWrapper}>
      <Input>
        <InputField value={title} onChange={handleOnChange} />
      </Input>
      <Button
        className={styles.actionButton}
        type="button"
        button_type="none"
        corner_type="rounded"
        onClick={handleAddItem}
      >
        <AddIcon sx={{ fontSize: 20 }} />
      </Button>
    </div>
  )
}
