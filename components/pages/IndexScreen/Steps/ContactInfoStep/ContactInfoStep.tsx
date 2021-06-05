import { VStack } from '@chakra-ui/react'
import { LabelAndTextInput, StepView } from '../../../../ui'
import { DefaultStepProps } from '../types'
import { useContactInfo } from './useContactInfo'

export const ContactInfoStep: React.FC<DefaultStepProps> = ({
  stepIndex,
  setStepIndex,
  stepTitles,
  onClickPrevious,
  onClickNext,
  stepErrors,
  setStepErrors
}) => {
  const { methods, setValues } = useContactInfo({ stepIndex, stepErrors, setStepErrors })
  const { register, formState: { errors }} = methods

  console.count('ContactInfoStepがレンダリングされた回数')
  return (
    <StepView
      stepIndex={stepIndex}
      setStepIndex={setStepIndex}
      stepTitles={stepTitles}
      onClickPrevious={() => {
        onClickPrevious && onClickPrevious()
        setValues()
      }}
      onClickNext={() => {
        onClickNext && onClickNext()
        setValues()
      }}
      stepErrors={stepErrors}
      setStepErrors={setStepErrors}
    >
      <VStack spacing="24px">
        <LabelAndTextInput label="携帯番号" errorMessage={errors.mobilePhone?.message} required {...register('mobilePhone')} />
        <LabelAndTextInput label="郵便番号" errorMessage={errors.postalCode?.message} required {...register('postalCode')} />
        <LabelAndTextInput label="都道府県" errorMessage={errors.prefecture?.message} required {...register('prefecture')} />
        <LabelAndTextInput label="市区町村" errorMessage={errors.city?.message} required {...register('city')} />
        <LabelAndTextInput label="番地" {...register('block')} />
        <LabelAndTextInput label="建物名・号室" {...register('building')} />
        <LabelAndTextInput label="最寄り駅・地区" {...register('nearestStation')} />
        <LabelAndTextInput label="ウェブサイト" {...register('website')} />
      </VStack>
    </StepView>
  )
}