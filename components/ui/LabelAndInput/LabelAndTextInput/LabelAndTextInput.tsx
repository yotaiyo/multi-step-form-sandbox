import { FormControl, FormLabel, FormErrorMessage} from '@chakra-ui/react'
import { TextInput, TextInputProps } from '../../TextInput'
import { DefaultLabelAndInputProps } from '../type'

export type LabelAndTextInputProps = Pick<TextInputProps, 'onChange' | 'onBlur' | 'placeholder' | 'value'> & DefaultLabelAndInputProps

export const LabelAndTextInput: React.FC<LabelAndTextInputProps> = ({
  label,
  errorMessage,
  onChange,
  onBlur,
  placeholder,
  value
}) => {
  return (
    <FormControl isInvalid={!!errorMessage}>
      {label && <FormLabel>{label}</FormLabel>}
      <TextInput onChange={onChange} onBlur={onBlur} placeholder={placeholder} isError={!!errorMessage} value={value} />
      {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  )
}