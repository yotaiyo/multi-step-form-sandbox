import { Controller } from 'react-hook-form'
import { VStack } from '@chakra-ui/react'
import { LabelAndTextInput, LabelAndDateInput } from '../../../../ui'
import { useBasicInfo } from './useBasicInfo'

export const BasicInfoStep: React.FC = () => {
  const { methods } = useBasicInfo()

  return (
    <VStack spacing="24px">
      <Controller
        control={methods.control}
        name='name'
        render={({ field: { onChange, value } }) => {
          return (
            <LabelAndTextInput label="名前" value={value} onChange={onChange} />
          )
        }}
      />
      <Controller
        control={methods.control}
        name='job'
        render={({ field: { onChange, value } }) => {
          return (
            <LabelAndTextInput label="職業" value={value} onChange={onChange} />
          )
        }}
      />
      {/* <Controller
        control={methods.control}
        name='birthday'
        render={({ field: { onChange, value } }) => {
          return (
            <LabelAndDateInput
            label="生年月日"
            startYear={2000}
            yearValue={value?.getFullYear()}
            monthValue={value?.getMonth()}
            dayValue={value?.getDay()}
            onChange={onChange} />
          )
        }}
      /> */}
    </VStack>
  )
}