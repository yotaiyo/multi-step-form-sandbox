import { Controller } from 'react-hook-form'
import { VStack } from '@chakra-ui/react'
import { LabelAndTextInput } from '../../../../ui'
import { useBasicInfo } from './useBasicInfo'

export const BasicInfoStep: React.FC = () => {
  const { methods } = useBasicInfo()

  console.count('BasicInfoStepがレンダリングされた回数')
  return (
    <VStack spacing="24px">
      <Controller
        control={methods.control}
        name='name'
        render={({ field: { onChange, onBlur } }) => {
          return (
            <LabelAndTextInput label="名前" onChange={onChange} onBlur={onBlur} />
          )
        }}
      />
      <Controller
        control={methods.control}
        name='job'
        render={({ field: { onChange, onBlur } }) => {
          return (
            <LabelAndTextInput label="職業" onChange={onChange} onBlur={onBlur} />
          )
        }}
      />
    </VStack>
  )
}