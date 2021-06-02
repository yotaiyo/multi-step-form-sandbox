import React from 'react'
import { Select as ChakraSelect, Box } from '@chakra-ui/react'

export type SelectProps = {
  id?: string
  name?: string
  value?: string | number
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
  onBlur?: React.FocusEventHandler<HTMLSelectElement>
  width?: string
  children?: React.ComponentProps<'select'>['children']
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({
  id,
  name,
  value,
  onChange,
  onBlur,
  width,
  children
}, ref) => {
  return (
    <Box width={width}>
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
    </Box>
  )
})