import { FormControl, FormLabel, FormErrorMessage} from '@chakra-ui/react'
import { NumberInput, NumberInputProps } from '../../NumberInput'
import { DefaultLabelAndInputProps } from '../type'

export type LabelAndNumberInputProps = Pick<NumberInputProps, 'value' | 'onChange' | 'min' | 'max' | 'defaultValue' | 'step'> & DefaultLabelAndInputProps

export const LabelAndNumberInput: React.FC<LabelAndNumberInputProps> = ({
  label,
  errorMessage,
  onChange,
  value,
  min,
  max,
  defaultValue,
  step
}) => {
  return (
    <FormControl isInvalid={!!errorMessage}>
      {label && <FormLabel>{label}</FormLabel>}
      <NumberInput
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        defaultValue={defaultValue}
        step={step}
        isError={!!errorMessage}
      />
      {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  )
}