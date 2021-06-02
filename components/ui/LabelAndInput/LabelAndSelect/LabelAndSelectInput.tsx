import React from 'react'
import { FormControl, FormLabel } from '@chakra-ui/react'
import { Select, SelectProps } from '../../Select'
import { DefaultLabelAndInputProps } from '../type'

export type LabelAndSelectInputProps = SelectProps & Pick<DefaultLabelAndInputProps, 'label'>

export const LabelAndSelectInput = React.forwardRef<HTMLSelectElement, LabelAndSelectInputProps>(({
  id,
  name,
  value,
  onChange,
  onBlur,
  width,
  label,
  children
}, ref) => {
  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <Select ref={ref} id={id} name={name} onChange={onChange} value={value} onBlur={onBlur} width={width}>{children}</Select>
    </FormControl>
  )
})