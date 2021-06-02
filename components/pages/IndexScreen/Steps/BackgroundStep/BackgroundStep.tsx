import { VStack, Box, HStack, FormControl, FormLabel } from '@chakra-ui/react'
import { LabelAndTextInput, Select, LabelAndSelectInput,StepView } from '../../../../ui'
import { useBackground } from './useBackground'
import { DefaultStepProps } from '../types'

export const BackgroundStep: React.FC<DefaultStepProps> = ({
  title,
  currentStep,
  numOfStep,
  previousTitle,
  nextTitle,
  onClickPrevious,
  onClickNext
}) => {
  const { methods, setValues } = useBackground()
  const { register, formState: { errors } } = methods

  console.count('BackgroundStepがレンダリングされた回数')
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
        setValues()
      }}
    >
      <VStack spacing="24px">
        <LabelAndTextInput label='役職' {...register('career.position')}/>
      </VStack>
    </StepView>
  )
}