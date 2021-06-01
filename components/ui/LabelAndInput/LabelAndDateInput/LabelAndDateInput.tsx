import React from 'react'
import { FormControl, FormLabel } from '@chakra-ui/react'
import { DateDropdown, DateDropdownProps } from '../../DateDropdown'
import { DefaultLabelAndInputProps } from '../type'

export type LabelAndDateInputProps = DateDropdownProps & Omit<DefaultLabelAndInputProps, 'errorMessage'>

export const LabelAndDateInput = React.forwardRef<HTMLSelectElement, LabelAndDateInputProps>(({
  label,
  onChange,
  onBlur,
  yearId,
  monthId,
  dayId,
  yearValue,
  monthValue,
  dayValue,
  startYear
}, ref) => {
  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <DateDropdown
        ref={ref}
        yearId={yearId}
        monthId={monthId}
        dayId={dayId}
        yearValue={yearValue}
        monthValue={monthValue}
        dayValue={dayValue}
        startYear={startYear}
        onChange={onChange}
        onBlur={onBlur}
      />
    </FormControl>
  )
})