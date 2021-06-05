import { VStack } from '@chakra-ui/react'
import { LabelAndTextInput, LabelAndDateInput, LabelAndTextareaInput, StepView } from '../../../../ui'
import { useCarrer } from './useCarrer'
import { DefaultStepProps } from '../types'

export const CarrerStep: React.FC<DefaultStepProps> = ({
  title,
  currentStep,
  numOfStep,
  previousTitle,
  nextTitle,
  onClickPrevious,
  onClickNext
}) => {
  const { methods, setValues } = useCarrer()
  const { register, formState: { errors } } = methods

  console.count('CarrerStepがレンダリングされた回数')
  return (
    <StepView
      title={title}
      currentStep={currentStep}
      numOfStep={numOfStep}
      previousTitle={previousTitle}
      nextTitle={nextTitle}
      onClickPrevious={() => {
        onClickPrevious && onClickPrevious()
        setValues()
      }}
      onClickNext={() => {
        onClickNext && onClickNext()
        setValues()
      }}
    >
      <VStack spacing="24px">
        <LabelAndTextInput
          label='会社名'
          errorMessage={errors.companyName?.message}
          required
          {...register('companyName')}
        />

        <LabelAndTextInput
          label='役職'
          errorMessage={errors.position?.message}
          required
          {...register('position')}
        />

        <LabelAndTextInput
          label='雇用形態'
          errorMessage={errors.employmentStatus?.message}
          required
          {...register('employmentStatus')}
        />

        <LabelAndTextInput label='場所' {...register('place')} />

        <LabelAndDateInput label='開始日'>
          <LabelAndDateInput.SelectYear {...register('startDateYear')} />
          <LabelAndDateInput.SelectMonth {...register('startDateMonth')} />
        </LabelAndDateInput>

        <LabelAndDateInput label='終了日'>
          <LabelAndDateInput.SelectYear {...register('endDateYear')} />
          <LabelAndDateInput.SelectMonth {...register('endDateMonth')} />
        </LabelAndDateInput>

        <LabelAndTextareaInput label='説明' {...register('description')} />
      </VStack>
    </StepView>
  )
}