import { FormControl, FormLabel } from '@chakra-ui/react'
import { Select, SelectProps } from '../../Select'
import { DefaultLabelAndInputProps } from '../type'

export type LabelAndSelectInputProps = Pick<SelectProps, 'onChange' | 'value'> & Pick<DefaultLabelAndInputProps, 'label'>

export const LabelAndSelectInput: React.FC<LabelAndSelectInputProps> = ({
  label,
  onChange,
  value,
  children
}) => {
  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <Select onChange={onChange} value={value}>{children}</Select>
    </FormControl>
  )
}