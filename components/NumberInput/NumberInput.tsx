
import { Input } from '@chakra-ui/react'

export type NumberInputProps = {
  value?: number
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  isError?: boolean
}

export const NumberInput: React.FC<NumberInputProps> = ({ value, onChange, isError }) => {
  return (
    <Input
      type="number"
      value={value}
      onChange={onChange}
      size="md"
      isInvalid={isError}
    />
  )
}