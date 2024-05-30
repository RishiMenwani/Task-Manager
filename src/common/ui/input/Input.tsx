import { InputProvider } from '@/common/context/InputProvider'
import { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

export function Input({ children }: IProps) {
  return <InputProvider>{children}</InputProvider>
}
