import { FormControl, FormLabel, FormErrorMessage} from '@chakra-ui/react'
import { TextInput, TextInputProps } from '../../TextInput'
import { DefaultLabelAndInputProps } from '../type'

export type LabelAndTextInputProps = Pick<TextInputProps, 'onChange' | 'placeholder' | 'value'> & DefaultLabelAndInputProps

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