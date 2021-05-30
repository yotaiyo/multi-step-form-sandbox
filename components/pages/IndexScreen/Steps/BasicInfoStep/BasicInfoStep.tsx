import { VStack } from '@chakra-ui/react'
import { LabelAndTextInput } from '../../../../ui'
import { useBasicInfo } from './useBasicInfo'

export const BasicInfoStep: React.FC = () => {
  const { methods } = useBasicInfo()

  console.count('BasicInfoStepがレンダリングされた回数')
  return (
    <VStack spacing="24px">
      <LabelAndTextInput label="名前" id='name' {...methods.register('name')} />
      <LabelAndTextInput label="職業" id='job' {...methods.register('job')} />
    </VStack>
  )
}