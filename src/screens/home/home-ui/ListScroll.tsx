import { RefObject, useEffect, useState } from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import styles from "../Home.module.scss"

interface IProps {
  listRef: RefObject<HTMLDivElement>
}

const SIDEBAR_WIDTH = 256
const TASK_ITEM_WIDTH = 280 + 20

export function ListScroll({ listRef }: IProps) {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const listNode = listRef.current

    if (!listNode) {
      return
    }

    listNode.style.transform = `translateX(${-slide * TASK_ITEM_WIDTH}px)`
  }, [slide])

  const handleOnSlidePrev = () => {
    if (slide <= 0) {
      return
    }

    setSlide((prev) => prev - 1)
  }

  const handleOnSlideNext = () => {
    const listNode = listRef.current

    if (
      !listNode ||
      window.innerWidth - SIDEBAR_WIDTH >=
      listNode?.clientWidth - (slide - 1) * TASK_ITEM_WIDTH
    ) {
      return
    }

    setSlide((prev) => prev + 1)
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.actionButton} onClick={handleOnSlidePrev}><BsArrowLeftShort /></button>
      <button className={styles.actionButton} onClick={handleOnSlideNext}><BsArrowRightShort /></button>
    </div>
  )
}
