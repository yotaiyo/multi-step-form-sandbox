import React from 'react'
import { Input } from '@chakra-ui/react'

export type TextInputProps = {
  id?: string
  name?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  placeholder?: string
  isError?: boolean
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(({ id, name, value, onChange, onBlur, placeholder, isError }, ref) => {
  return (
    <Input
      ref={ref}
      id={id}
      name={name}
      type="text"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      isInvalid={isError}
    />
  )
})