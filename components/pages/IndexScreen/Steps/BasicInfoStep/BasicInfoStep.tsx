import { VStack } from '@chakra-ui/react'
import { LabelAndTextInput, LabelAndDateInput } from '../../../../ui'

export const BasicInfoStep: React.FC = () => {
  return (
    <VStack>
      <LabelAndTextInput label="名前" />
      <LabelAndDateInput label="誕生日" />
    </VStack>
  )
}