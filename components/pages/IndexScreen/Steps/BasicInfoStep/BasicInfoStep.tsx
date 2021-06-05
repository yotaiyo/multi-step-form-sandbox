import { VStack } from '@chakra-ui/react'
import { LabelAndTextInput, LabelAndSelectInput, StepView, LabelAndDateInput } from '../../../../ui'
import { useBasicInfo } from './useBasicInfo'
import { DefaultStepProps } from '../types'

export const BasicInfoStep: React.FC<DefaultStepProps> = ({
  title,
  currentStep,
  numOfStep,
  previousTitle,
  nextTitle,
  onClickPrevious,
  onClickNext
}) => {
  const { methods, setValues } = useBasicInfo()
  const { register, formState: { errors, isValid } } = methods

  console.count('BasicInfoStepがレンダリングされた回数')
  return (
    <StepView
      title={title}
      currentStep={currentStep}
      numOfStep={numOfStep}
      previousTitle={previousTitle}
      nextTitle={nextTitle}
      onClickPrevious={onClickPrevious}
      onClickNext={() => {
        if (isValid) {
          onClickNext && onClickNext()
          setValues()
        } else {
          methods.setError('name', { message: 'お名前を入力してください' })
          methods.setError('nameKana', { message: 'ふりがなを入力してください' })
        }
      }}
    >
      <VStack spacing="24px">
        <LabelAndTextInput
          label='お名前'
          errorMessage={errors.name?.message}
          required
          {...register('name')}
        />
        <LabelAndTextInput
          label='フリガナ'
          errorMessage={errors.nameKana?.message}
          required
          {...register('nameKana')}
        />

        <LabelAndDateInput label='生年月日'>
          <LabelAndDateInput.SelectYear {...register('birthDayYear')} />
          <LabelAndDateInput.SelectMonth {...register('birthDayMonth')} />
          <LabelAndDateInput.SelectDay {...register('birthDayDay')} />
        </LabelAndDateInput>

        <LabelAndSelectInput label='性別' width='120px' {...register('gender')}>
          <option label='男性' value='man' />
          <option label='女性' value='woman' />
          <option label='その他' value='other' />
          <option label='未回答' value='unanswered' />
        </LabelAndSelectInput>

        <LabelAndTextInput label='国' {...register('country')} />
        <LabelAndTextInput label='出身地' {...register('birthPlace')} />
        <LabelAndTextInput label='言語' {...register('language')} />
        <LabelAndTextInput label='所属企業' {...register('company')} />
        <LabelAndTextInput label='職業' {...register('job')} />
      </VStack>
    </StepView>
  )
}