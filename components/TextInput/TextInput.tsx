
import { Input } from '@chakra-ui/react'

export type TextInputProps = {
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  isError?: boolean
}

export const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder, isError }) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      size="md"
      isInvalid={isError}
    />
  )
}