import { VStack } from '@chakra-ui/react'
import { LabelAndTextareaInput } from '../../../../ui'

export const QuestionStep: React.FC = () => {
  return (
    <VStack spacing="24px">
      <LabelAndTextareaInput label="Q1. 好きな映画は何ですか？"/>
      <LabelAndTextareaInput label="Q2. 好きな漫画は何ですか？"/>
    </VStack>
  )
}