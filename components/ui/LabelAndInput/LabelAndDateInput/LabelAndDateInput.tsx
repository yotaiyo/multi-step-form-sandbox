import React from 'react'
import { HStack, Box, FormControl, FormLabel } from '@chakra-ui/react'
import { Select } from '../../Select'
import { range } from '../../../../utils'

type SelectYearProps = {
  id?: string
  value?: string
  startYear?: number
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
  onBlur?: React.FocusEventHandler<HTMLSelectElement>
}

const SelectYear = React.forwardRef<HTMLSelectElement, SelectYearProps>(({
  id,
  value,
  startYear = 1900,
  onBlur,
  onChange
}, ref) => {
  const currentYear = new Date().getFullYear()

  return (
    <Box width='120px'>
      <Select ref={ref} id={id} value={value} onChange={onChange} onBlur={onBlur}>
        {
          range(startYear, currentYear - startYear + 1).map((year) => (
            <option label={`${year}年`} value={year} />
          ))
        }
      </Select>
    </Box>
  )
})

type SelectMonthProps = {
  id?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
  onBlur?: React.FocusEventHandler<HTMLSelectElement>
}

const SelectMonth = React.forwardRef<HTMLSelectElement, SelectMonthProps>(({
  id,
  value,
  onBlur,
  onChange
}, ref) => {

  return (
    <Box width='120px'>
      <Select ref={ref} id={id} value={value} onChange={onChange} onBlur={onBlur}>
        {
          range(1, 12).map((month) => (
            <option label={`${month}月`} value={month} />
          ))
        }
      </Select>
    </Box>
  )
})

type SelectDayProps = {
  id?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
  onBlur?: React.FocusEventHandler<HTMLSelectElement>
}

const SelectDay = React.forwardRef<HTMLSelectElement, SelectDayProps>(({
  id,
  value,
  onBlur,
  onChange
}, ref) => {

  return (
    <Box width='120px'>
      <Select ref={ref} id={id} value={value} onChange={onChange} onBlur={onBlur}>
        {
          range(1, 31).map((day) => (
            <option label={`${day}日`} value={day} />
          ))
        }
      </Select>
    </Box>
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
        <HStack spacing='4px'>{children}</HStack>
    </FormControl>
  )
}

LabelAndDateInput.SelectYear = SelectYear
LabelAndDateInput.SelectMonth = SelectMonth
LabelAndDateInput.SelectDay = SelectDay
