import { FormControl, FormLabel, FormErrorMessage} from '@chakra-ui/react'
import { Textarea, TextareaProps } from '../../Textarea'
import { DefaultLabelAndInputProps } from '../type'

export type LabelAndTextareaInputProps = Omit<TextareaProps, 'isError'> & DefaultLabelAndInputProps

export const LabelAndTextareaInput: React.FC<LabelAndTextareaInputProps> = ({
  id,
  name,
  label,
  errorMessage,
  onChange,
  placeholder,
  value
}) => {
  return (
    <FormControl isInvalid={!!errorMessage}>
      {label && <FormLabel>{label}</FormLabel>}
      <Textarea id={id} name={name} onChange={onChange} placeholder={placeholder} isError={!!errorMessage} value={value} />
      {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  )
}