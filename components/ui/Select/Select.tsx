import { Select as ChakraSelect } from '@chakra-ui/react'

export type SelectProps = {
  value?: string | number
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
}

export const Select: React.FC<SelectProps> = ({ value, onChange, children }) => {
  return (
    <ChakraSelect value={value} onChange={onChange}>{children}</ChakraSelect>
  )
}