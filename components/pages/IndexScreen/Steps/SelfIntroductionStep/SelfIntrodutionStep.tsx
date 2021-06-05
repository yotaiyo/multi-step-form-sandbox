import { VStack } from '@chakra-ui/react'
import { StepView, StepViewProps, LabelAndTextareaInput } from '../../../../ui'
import { useSelfIntroduction } from './useSelfIntroduction'

type SelfIntroductionStepProps = Omit<StepViewProps, 'children'>

export const SelfIntroductionStep: React.FC<SelfIntroductionStepProps> = ({ configs }) => {
  const { methods, setValues } = useSelfIntroduction()
  const { register } = methods

  return (
    <StepView
      configs={configs}
      onClickPrevious={setValues}
      onClickNext={setValues}
    >
      <VStack spacing="24px">
        <LabelAndTextareaInput label='好きなスポーツについて教えてください' {...register('sports')} />
        <LabelAndTextareaInput label='最近読んだ本について教えてください' {...register('book')} />
        <LabelAndTextareaInput label='よく観るテレビ番組について教えてください' {...register('tv')} />
        <LabelAndTextareaInput label='好きな映画について教えてください' {...register('movie')} />
        <LabelAndTextareaInput label='よく使うWebサービスについて教えてください' {...register('webService')} />
      </VStack>
    </StepView>
  )
}