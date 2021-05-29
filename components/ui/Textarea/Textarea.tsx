import React from 'react'
import { Textarea as ChakraTextArea } from '@chakra-ui/react'

export type TextareaProps = {
  id?: string
  name?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
  placeholder?: string
  isError?: boolean
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({
  id,
  name,
  value,
  onChange,
  placeholder,
  isError
}, ref) => {
  return (
    <ChakraTextArea
      ref={ref}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      isInvalid={isError}
    />
  )
})
