import { HStack, Box } from '@chakra-ui/react'
import { Select } from '../Select'
import { range } from '../../utils'

export type DateDropdownProps = {
  yearValue?: number
  monthValue?: number
  dayValue?: number
  startYear?: number
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
}

export const DateDropdown: React.FC<DateDropdownProps> = ({
  yearValue,
  monthValue,
  dayValue,
  startYear = 1900,
  onChange
}) => {
  const currentYear = new Date().getFullYear()

  return (
    <HStack spacing='4px'>
      <Box width='120px'>
        <Select value={yearValue} onChange={onChange}>
          {
            range(startYear, currentYear - startYear + 1).map((year) => (
              <option label={`${year}年`} value={year} />
            ))
          }
        </Select>
      </Box>

      <Box width='80px'>
        <Select value={monthValue} onChange={onChange}>
          {
            range(1, 12).map((month) => (
              <option label={`${month}月`} value={month} />
            ))
          }
        </Select>
      </Box>

      <Box width='80px'>
        <Select value={dayValue} onChange={onChange}>
          {
            range(1, 31).map((day) => (
              <option label={`${day}日`} value={day} />
            ))
          }
        </Select>
      </Box>
    </HStack>
  )
}