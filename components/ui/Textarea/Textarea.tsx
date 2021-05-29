import { Textarea as ChakraTextArea } from '@chakra-ui/react'

export type TextareaProps = {
  id?: string
  name?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
  placeholder?: string
  isError?: boolean
}

export const Textarea: React.FC<TextareaProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  isError
}) => {
  return (
    <ChakraTextArea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      isInvalid={isError}
    />
  )
}