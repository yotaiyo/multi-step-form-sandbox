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
  const { register, formState: { errors } } = methods

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
        onClickNext && onClickNext()
        setValues()
      }}
    >
      <VStack spacing="24px">
        <LabelAndTextInput
          label='お名前'
          id='name'
          errorMessage={errors.name?.message}
          required={true}
          {...register('name')}
        />
        <LabelAndTextInput
          label='フリガナ'
          id='nameKana'
          errorMessage={errors.nameKana?.message}
          required={true}
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

        <LabelAndTextInput label='国' id='country' {...register('country')} />
        <LabelAndTextInput label='出身地' id='birthPlace' {...register('birthPlace')} />
        <LabelAndTextInput label='言語' id='language' {...register('language')} />
        <LabelAndTextInput label='所属企業' id='company' {...register('company')} />
        <LabelAndTextInput label='職業' id='job' {...register('job')} />
      </VStack>
    </StepView>
  )
}