import React from 'react'
import { HStack, Box, FormControl, FormLabel, Text } from '@chakra-ui/react'
import { Select, SelectProps } from '../../Select'
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
  onChange
}, ref) => {
  const currentYear = new Date().getFullYear()

  return (
    <HStack>
      <Box width='100px'>
        <Select ref={ref} id={id} name={name} value={value} onChange={onChange} onBlur={onBlur} placeholder='--'>
          {
            range(startYear, currentYear - startYear + 1).map((year) => (
              <option key={year} label={`${year}`} value={year} />
            ))
          }
        </Select>
      </Box>
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
  onChange
}, ref) => {

  return (
    <HStack>
      <Box width='80px'>
        <Select ref={ref} id={id} name={name} value={value} onChange={onChange} onBlur={onBlur} placeholder='--'>
          {
            range(1, 12).map((month) => (
              <option key={month} label={`${month}`} value={month} />
            ))
          }
        </Select>
      </Box>
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
  onChange
}, ref) => {

  return (
    <HStack>
      <Box width='80px'>
        <Select ref={ref} id={id} name={name} value={value} onChange={onChange} onBlur={onBlur} placeholder='--'>
          {
            range(1, 31).map((day) => (
              <option key={day} label={`${day}`} value={day} />
            ))
          }
        </Select>
      </Box>
      <Text>日</Text>
    </HStack>
  )
})

export type LabelAndDateInputProps = {
  label?: string
}

export const LabelAndDateInput: React.FC<LabelAndDateInputProps> & {
  SelectYear: typeof SelectYear
  SelectMonth: typeof SelectMonth
  SelectDay: typeof SelectDay
} = ({ label, children }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <HStack spacing='8px'>
        {children}
      </HStack>
    </FormControl>
  )
}

LabelAndDateInput.SelectYear = SelectYear
LabelAndDateInput.SelectMonth = SelectMonth
LabelAndDateInput.SelectDay = SelectDay
