import { VStack } from '@chakra-ui/react'
import { LabelAndTextInput, StepView } from '../../../../ui'
import { DefaultStepProps } from '../types'
import { useContactInfo } from './useContactInfo'

export const ContactInfoStep: React.FC<DefaultStepProps> = ({
  title,
  currentStep,
  numOfStep,
  previousTitle,
  nextTitle,
  onClickPrevious,
  onClickNext
}) => {
  const { methods, setValues} = useContactInfo()
  const { register } = methods

  console.count('ContactInfoStepがレンダリングされた回数')
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
        <LabelAndTextInput label="携帯番号" {...register('mobileNumber')} />
        <LabelAndTextInput label="郵便番号" {...register('postalCode')} />
        <LabelAndTextInput label="都道府県" {...register('prefecture')} />
        <LabelAndTextInput label="市区町村" {...register('city')} />
        <LabelAndTextInput label="番地" {...register('block')} />
        <LabelAndTextInput label="建物名・号室" {...register('building')} />
        <LabelAndTextInput label="最寄り駅・地区" {...register('nearestStation')} />
        <LabelAndTextInput label="ウェブサイト" {...register('website')} />
      </VStack>
    </StepView>
  )
}