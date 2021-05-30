import React from 'react'
import { FormControl, FormLabel, FormErrorMessage} from '@chakra-ui/react'
import { TextInput, TextInputProps } from '../../TextInput'
import { DefaultLabelAndInputProps } from '../type'

export type LabelAndTextInputProps = Omit<TextInputProps, 'isError'> & DefaultLabelAndInputProps

export const LabelAndTextInput = React.forwardRef<HTMLInputElement, LabelAndTextInputProps>(({
  id,
  name,
  errorMessage,
  onChange,
  onBlur,
  placeholder,
  value,
  label,
}, ref) => {
  return (
    <FormControl isInvalid={!!errorMessage}>
      {label && <FormLabel>{label}</FormLabel>}
      <TextInput
        ref={ref}
        id={id}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        isError={!!errorMessage}
        value={value}
      />
      {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  )
})