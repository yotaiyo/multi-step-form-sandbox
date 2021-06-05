import { VStack } from '@chakra-ui/react'
import { StepView, StepViewProps, LabelAndTextInput, LabelAndDateInput, LabelAndTextareaInput } from '../../../../ui'
import { useCarrer } from './useCarrer'

type CarrerStepStepProps = Omit<StepViewProps, 'children'>

export const CarrerStep: React.FC<CarrerStepStepProps> = ({ configs }) => {
  const { methods, setValues } = useCarrer()
  const { register, formState: { errors } } = methods

  console.count('CarrerStepがレンダリングされた回数')
  return (
    <StepView
      configs={configs}
      onClickPrevious={setValues}
      onClickNext={setValues}
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