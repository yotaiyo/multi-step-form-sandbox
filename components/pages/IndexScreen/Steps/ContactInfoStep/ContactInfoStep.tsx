import { VStack } from '@chakra-ui/react'
import { LabelAndTextInput } from '../../../../ui'
import { useContactInfo } from './useContactInfo'

export const ContactInfoStep: React.FC = () => {
  const { methods } = useContactInfo()
  const { register, formState: { errors }} = methods

  console.count('ContactInfoStepがレンダリングされた回数')
  return (
    <VStack spacing="24px">
      <LabelAndTextInput label="携帯番号" errorMessage={errors.mobileNumber?.message} required {...register('mobileNumber')} />
      <LabelAndTextInput label="郵便番号" errorMessage={errors.postalCode?.message} required {...register('postalCode')} />
      <LabelAndTextInput label="都道府県" errorMessage={errors.prefecture?.message} required {...register('prefecture')} />
      <LabelAndTextInput label="市区町村" errorMessage={errors.city?.message} required {...register('city')} />
      <LabelAndTextInput label="番地" {...register('block')} />
      <LabelAndTextInput label="建物名・号室" {...register('building')} />
      <LabelAndTextInput label="最寄り駅・地区" {...register('nearestStation')} />
      <LabelAndTextInput label="ウェブサイト" {...register('website')} />
    </VStack>
  )
}