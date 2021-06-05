import { VStack } from '@chakra-ui/react'
import { LabelAndTextareaInput, StepView } from '../../../../ui'
import { DefaultStepProps } from '../types'

export const SelfIntroductionStep: React.FC<DefaultStepProps> = ({
  title,
  currentStep,
  numOfStep,
  previousTitle,
  nextTitle,
  onClickPrevious,
  onClickNext
}) => {
  return (
    <StepView
      title={title}
      currentStep={currentStep}
      numOfStep={numOfStep}
      previousTitle={previousTitle}
      nextTitle={nextTitle}
      onClickPrevious={onClickPrevious}
      onClickNext={() => {
        onClickNext && onClickNext()
      }}
    >
      <VStack spacing="24px">
        <LabelAndTextareaInput label="Q1. 好きな映画は何ですか？"/>
        <LabelAndTextareaInput label="Q2. 好きな漫画は何ですか？"/>
      </VStack>
    </StepView>
  )
}