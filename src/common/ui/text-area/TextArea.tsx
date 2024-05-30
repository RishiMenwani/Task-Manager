import { TextAreaProvider } from '@/common/context/TextAreaProvider'
import { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

export function TextArea({ children }: IProps) {
  return <TextAreaProvider>{children}</TextAreaProvider>
}
