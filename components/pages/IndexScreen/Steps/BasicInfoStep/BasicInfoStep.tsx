import { VStack } from '@chakra-ui/react'
import { LabelAndTextInput, StepView, StepViewProps } from '../../../../ui'
import { useBasicInfo } from './useBasicInfo'

export type BasicInfoStepProps = Omit<StepViewProps, 'title'>

export const BasicInfoStep: React.FC<BasicInfoStepProps> = ({
  currentStep,
  numOfStep,
  previousTitle,
  nextTitle,
  onClickPrevious,
  onClickNext
}) => {
  const { methods, setValues } = useBasicInfo()

  console.count('BasicInfoStepがレンダリングされた回数')
  return (
    <StepView
      title='個人情報入力'
      currentStep={currentStep}
      numOfStep={numOfStep}
      previousTitle={previousTitle}
      nextTitle={nextTitle}
      onClickPrevious={onClickPrevious}
      onClickNext={() => {
        onClickNext && onClickNext()
        setValues()
      }}
    >
      <VStack spacing="24px">
        <LabelAndTextInput label='名前' id='name' {...methods.register('name')} />
        <LabelAndTextInput label='職業' id='job' {...methods.register('job')} />
      </VStack>
    </StepView>
  )
}