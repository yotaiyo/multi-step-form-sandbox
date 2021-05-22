import { FormControl, FormLabel, FormErrorMessage} from '@chakra-ui/react'
import { TextInput, TextInputProps } from '../../TextInput'

export type LabelAndTextInputProps = Pick<TextInputProps, 'onChange' | 'placeholder' | 'value'> & {
  label?: string
  errorMessage?: string
}

export const LabelAndTextInput: React.FC<LabelAndTextInputProps> = ({
  label,
  errorMessage,
  onChange,
  placeholder,
  value
}) => {
  return (
    <FormControl isInvalid={!!errorMessage}>
      {label && <FormLabel>{label}</FormLabel>}
      <TextInput onChange={onChange} placeholder={placeholder} isError={!!errorMessage} value={value} />
      {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  )
}