import { VStack } from '@chakra-ui/react'
import { LabelAndTextInput, StepView } from '../../../../ui'
import { DefaultStepProps } from '../types'

export const AddressStep: React.FC<DefaultStepProps> = ({
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
        <LabelAndTextInput label="郵便番号" />
        <LabelAndTextInput label="都道府県" />
        <LabelAndTextInput label="住所1" />
        <LabelAndTextInput label="住所2" />
      </VStack>
    </StepView>
  )
}