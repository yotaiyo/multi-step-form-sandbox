import { Textarea as ChakraTextArea } from '@chakra-ui/react'

export type TextareaProps = {
  value?: string
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
  placeholder?: string
  isError?: boolean
}

export const Textarea: React.FC<TextareaProps> = ({
  value,
  onChange,
  placeholder,
  isError
}) => {
  return (
    <ChakraTextArea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      isInvalid={isError}
    />
  )
}