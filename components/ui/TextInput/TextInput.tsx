
import { Input } from '@chakra-ui/react'

export type TextInputProps = {
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  placeholder?: string
  isError?: boolean
}

export const TextInput: React.FC<TextInputProps> = ({ value, onChange, onBlur, placeholder, isError }) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      isInvalid={isError}
    />
  )
}