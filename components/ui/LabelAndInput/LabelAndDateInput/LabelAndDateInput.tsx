import { FormControl, FormLabel } from '@chakra-ui/react'
import { DateDropdown, DateDropdownProps } from '../../DateDropdown'
import { DefaultLabelAndInputProps } from '../type'

export type LabelAndDateInputProps = Pick<DateDropdownProps, 'yearValue' | 'monthValue' | 'dayValue' | 'onChange' | 'startYear'> & Pick<DefaultLabelAndInputProps, 'label'>

export const LabelAndDateInput: React.FC<LabelAndDateInputProps> = ({
  label,
  onChange,
  yearValue,
  monthValue,
  dayValue,
  startYear
}) => {
  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <DateDropdown onChange={onChange} yearValue={yearValue} monthValue={monthValue} dayValue={dayValue} startYear={startYear} />
    </FormControl>
  )
}