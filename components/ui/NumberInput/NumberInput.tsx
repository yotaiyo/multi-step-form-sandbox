
import {
  NumberInput as ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react'

export type NumberInputProps = {
  value?: number
  onChange?: (valueAsString: string, valueAsNumber: number) => void
  isError?: boolean
  defaultValue?: number
  min?: number
  max?: number
  step?: number
}

export const NumberInput: React.FC<NumberInputProps> = ({ value, onChange, isError, defaultValue, min, max, step }) => {
  return (
    <ChakraNumberInput
      value={value}
      isInvalid={isError}
      onChange={onChange}
      defaultValue={defaultValue}
      min={min}
      max={max}
      step={step}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </ChakraNumberInput>
  )
}