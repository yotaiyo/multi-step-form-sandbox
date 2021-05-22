import { VStack } from '@chakra-ui/react'
import { LabelAndTextInput } from '../../../../ui'

export const AddressStep: React.FC = () => {
  return (
    <VStack spacing="24px">
      <LabelAndTextInput label="郵便番号" />
      <LabelAndTextInput label="都道府県" />
      <LabelAndTextInput label="住所1" />
      <LabelAndTextInput label="住所2" />
    </VStack>
  )
}