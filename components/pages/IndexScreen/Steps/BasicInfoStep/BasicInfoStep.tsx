import { VStack } from '@chakra-ui/react'
import { LabelAndTextInput, LabelAndDateInput, LabelAndSelectInput, StepView } from '../../../../ui'
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
        <LabelAndTextInput label='お名前' id='name' {...methods.register('name')} />
        <LabelAndTextInput label='フリガナ' id='nameKana' {...methods.register('nameKana')} />
        {/* <LabelAndDateInput label="生年月日"  {...methods.register('birthDay')} /> */}
        {/* <LabelAndSelectInput label='性別' id='gender' {...methods.register('gender')} /> */}
        <LabelAndTextInput label='国' id='country' {...methods.register('country')} />
        <LabelAndTextInput label='出身地' id='birthPlace' {...methods.register('birthPlace')} />
        <LabelAndTextInput label='言語' id='language' {...methods.register('language')} />
        <LabelAndTextInput label='所属企業' id='company' {...methods.register('company')} />
        <LabelAndTextInput label='職業' id='job' {...methods.register('job')} />
      </VStack>
    </StepView>
  )
}