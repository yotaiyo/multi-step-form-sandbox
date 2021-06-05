import { VStack } from '@chakra-ui/react'
import { LabelAndTextareaInput, StepView } from '../../../../ui'
import { DefaultStepProps } from '../types'
import { useSelfIntroduction } from './useSelfIntroduction'

export const SelfIntroductionStep: React.FC<DefaultStepProps> = ({
  stepIndex,
  stepTitles,
  onClickPrevious,
  onClickNext,
  stepErrors,
  setStepErrors
}) => {
  const { methods, setValues } = useSelfIntroduction()
  const { register } = methods

  return (
    <StepView
      stepIndex={stepIndex}
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
        <LabelAndTextareaInput label='好きなスポーツについて教えてください' {...register('sports')} />
        <LabelAndTextareaInput label='最近読んだ本について教えてください' {...register('book')} />
        <LabelAndTextareaInput label='よく観るテレビ番組について教えてください' {...register('tv')} />
        <LabelAndTextareaInput label='好きな映画について教えてください' {...register('movie')} />
        <LabelAndTextareaInput label='よく使うWebサービスについて教えてください' {...register('webService')} />
      </VStack>
    </StepView>
  )
}