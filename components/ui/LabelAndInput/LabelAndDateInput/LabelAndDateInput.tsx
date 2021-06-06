import React from 'react'
import { HStack, FormControl, FormLabel, Text, FormErrorMessage } from '@chakra-ui/react'
import { Select, SelectProps } from '../../Select'
import { DefaultLabelAndInputProps } from '../type'
import { range } from '../../../../utils'

type SelectYearProps = Omit<SelectProps, 'width' | 'children'> & {
  startYear?: number
}

const SelectYear = React.forwardRef<HTMLSelectElement, SelectYearProps>(({
  id,
  value,
  name,
  startYear = 1900,
  onBlur,
  onChange,
  isError
}, ref) => {
  const currentYear = new Date().getFullYear()

  return (
    <HStack>
      <Select
        ref={ref}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        width='100px'
        placeholder='--'
        isError={isError}
      >
        {
          range(startYear, currentYear - startYear + 1).map((year) => (
            <option key={year} label={`${year}`} value={year} />
          ))
        }
      </Select>
      <Text>年</Text>
    </HStack>
  )
})

type SelectMonthProps = Omit<SelectProps, 'width' | 'children'>

const SelectMonth = React.forwardRef<HTMLSelectElement, SelectMonthProps>(({
  id,
  name,
  value,
  onBlur,
  onChange,
  isError
}, ref) => {

  return (
    <HStack>
      <Select
        ref={ref}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        width='80px'
        placeholder='--'
        isError={isError}
      >
        {
          range(1, 12).map((month) => (
            <option key={month} label={`${month}`} value={month} />
          ))
        }
      </Select>
      <Text>月</Text>
    </HStack>
  )
})

type SelectDayProps = Omit<SelectProps, 'width' | 'children'>

const SelectDay = React.forwardRef<HTMLSelectElement, SelectDayProps>(({
  id,
  name,
  value,
  onBlur,
  onChange,
  isError
}, ref) => {

  return (
    <HStack>
      <Select
        ref={ref}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        width='80px'
        placeholder='--'
        isError={isError}
      >
        {
          range(1, 31).map((day) => (
            <option key={day} label={`${day}`} value={day} />
          ))
        }
      </Select>
      <Text>日</Text>
    </HStack>
  )
})

export type LabelAndDateInputProps = DefaultLabelAndInputProps

export const LabelAndDateInput: React.FC<LabelAndDateInputProps> & {
  SelectYear: typeof SelectYear
  SelectMonth: typeof SelectMonth
  SelectDay: typeof SelectDay
} = ({ label, errorMessage, required, children }) => {
  return (
    <FormControl isInvalid={!!errorMessage}>
      <FormLabel>
        <HStack>
          {label && <Text>{label}</Text>}
          {required && <Text color='red.500' fontSize='sm'>必須</Text>}
        </HStack>
      </FormLabel>
      <HStack spacing='8px'>
        {children}
      </HStack>
      {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  )
}

LabelAndDateInput.SelectYear = SelectYear
LabelAndDateInput.SelectMonth = SelectMonth
LabelAndDateInput.SelectDay = SelectDay
