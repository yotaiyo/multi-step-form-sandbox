import { VStack } from '@chakra-ui/react'
import { LabelAndTextareaInput } from '../../../../ui'
import { useSelfIntroduction } from './useSelfIntroduction'

export const SelfIntroductionStep: React.FC = () => {
  const { methods } = useSelfIntroduction()
  const { register } = methods

  return (
    <VStack spacing="24px">
      <LabelAndTextareaInput label='好きなスポーツについて教えてください' {...register('sports')} />
      <LabelAndTextareaInput label='最近読んだ本について教えてください' {...register('book')} />
      <LabelAndTextareaInput label='よく観るテレビ番組について教えてください' {...register('tv')} />
      <LabelAndTextareaInput label='好きな映画について教えてください' {...register('movie')} />
      <LabelAndTextareaInput label='よく使うWebサービスについて教えてください' {...register('webService')} />
    </VStack>
  )
}