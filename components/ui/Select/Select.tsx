import React from 'react'
import { Select as ChakraSelect } from '@chakra-ui/react'

export type SelectProps = {
  id?: string
  name?: string
  value?: string | number
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
  onBlur?: React.FocusEventHandler<HTMLSelectElement>
  children?: React.ComponentProps<'select'>['children']
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({
  id,
  name,
  value,
  onChange,
  onBlur,
  children
}, ref) => {
  return (
    <ChakraSelect
      ref={ref}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    >
      {children}
    </ChakraSelect>
  )
})