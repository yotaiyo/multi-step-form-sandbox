import { FormControl, FormLabel, FormErrorMessage} from '@chakra-ui/react'
import { Textarea, TextareaProps } from '../../Textarea'
import { DefaultLabelAndInputProps } from '../type'

export type LabelAndTextareaInputProps = Pick<TextareaProps, 'onChange' | 'placeholder' | 'value'> & DefaultLabelAndInputProps

export const LabelAndTextareaInput: React.FC<LabelAndTextareaInputProps> = ({
  label,
  errorMessage,
  onChange,
  placeholder,
  value
}) => {
  return (
    <FormControl isInvalid={!!errorMessage}>
      {label && <FormLabel>{label}</FormLabel>}
      <Textarea onChange={onChange} placeholder={placeholder} isError={!!errorMessage} value={value} />
      {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  )
}