import React from 'react'
import { Select as ChakraSelect } from '@chakra-ui/react'

export type SelectProps = {
  id?: string
  value?: string | number
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
  onBlur?: React.FocusEventHandler<HTMLSelectElement>
  children?: React.ComponentProps<'select'>['children']
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({
  id,
  value,
  onChange,
  onBlur,
  children
}, ref) => {
  return (
    <ChakraSelect
      ref={ref}
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    >
      {children}
    </ChakraSelect>
  )
})