import { VStack } from '@chakra-ui/react'
import { LabelAndTextInput, LabelAndDateInput } from '../../../../ui'

export const BasicInfoStep: React.FC = () => {
  return (
    <VStack spacing="24px">
      <LabelAndTextInput label="名前" />
      <LabelAndDateInput label="生年月日" />
    </VStack>
  )
}