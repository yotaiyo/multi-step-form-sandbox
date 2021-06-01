import React from 'react'
import { HStack, Box } from '@chakra-ui/react'
import { Select } from '../Select'
import { range } from '../../../utils'

export type DateDropdownProps = {
  yearId?: string
  monthId?: string
  dayId?: string
  yearValue?: number
  monthValue?: number
  dayValue?: number
  startYear?: number
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
  onBlur?: React.FocusEventHandler<HTMLSelectElement>
}

export const DateDropdown = React.forwardRef<HTMLSelectElement, DateDropdownProps>(({
  yearId,
  monthId,
  dayId,
  // FIXME: name渡していない
  yearValue,
  monthValue,
  dayValue,
  startYear = 1900,
  onChange,
  onBlur
}, ref) => {
  const currentYear = new Date().getFullYear()

  return (
    <HStack spacing='4px'>
      <Box width='120px'>
        <Select ref={ref} id={yearId} value={yearValue} onChange={onChange} onBlur={onBlur}>
          {
            range(startYear, currentYear - startYear + 1).map((year) => (
              <option label={`${year}年`} value={year} />
            ))
          }
        </Select>
      </Box>

      <Box width='100px'>
        <Select ref={ref} id={monthId} value={monthValue} onChange={onChange} onBlur={onBlur}>
          {
            range(1, 12).map((month) => (
              <option label={`${month}月`} value={month} />
            ))
          }
        </Select>
      </Box>

      <Box width='100px'>
        <Select ref={ref} id={dayId} value={dayValue} onChange={onChange} onBlur={onBlur}>
          {
            range(1, 31).map((day) => (
              <option label={`${day}日`} value={day} />
            ))
          }
        </Select>
      </Box>
    </HStack>
  )
})