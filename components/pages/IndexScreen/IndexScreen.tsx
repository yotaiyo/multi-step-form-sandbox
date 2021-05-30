import React, { useState } from 'react'
import { RecoilRoot } from 'recoil'
import { Center, Box } from '@chakra-ui/react'
import { BasicInfoStep, BasicInfoStepProps } from './Steps/BasicInfoStep'
// import { AddressStep } from './Steps/AddressStep'
// import { QuestionStep } from './Steps/QuestionStep'

const stepConfigs = [
  {
    title: '個人情報入力',
    render: ({
      currentStep,
      numOfStep,
      previousTitle,
      nextTitle,
      onClickPrevious,
      onClickNext }: BasicInfoStepProps
    ) => {
      return (
        <BasicInfoStep
          currentStep={currentStep}
          numOfStep={numOfStep}
          previousTitle={previousTitle}
          nextTitle={nextTitle}
          onClickPrevious={onClickPrevious}
          onClickNext={onClickNext}
        />
      )
    }
  },
  {
    title: '個人情報入力',
    render: ({
      currentStep,
      numOfStep,
      previousTitle,
      nextTitle,
      onClickPrevious,
      onClickNext }: BasicInfoStepProps
    ) => {
      return (
        <BasicInfoStep
          currentStep={currentStep}
          numOfStep={numOfStep}
          previousTitle={previousTitle}
          nextTitle={nextTitle}
          onClickPrevious={onClickPrevious}
          onClickNext={onClickNext}
        />
      )
    }
  }
  ,
  {
    title: '個人情報入力',
    render: ({
      currentStep,
      numOfStep,
      previousTitle,
      nextTitle,
      onClickPrevious,
      onClickNext }: BasicInfoStepProps
    ) => {
      return (
        <BasicInfoStep
          currentStep={currentStep}
          numOfStep={numOfStep}
          previousTitle={previousTitle}
          nextTitle={nextTitle}
          onClickPrevious={onClickPrevious}
          onClickNext={onClickNext}
        />
      )
    }
  }
]


export const IndexScreen = () => {
  const [stepIndex, setStepIndex] = useState(0)

  const back = () => {
    setStepIndex(stepIndex - 1)
  }

  const forward = () => {
    setStepIndex(stepIndex + 1)
  }

  return (
    <RecoilRoot>
      <Center>
        <Box backgroundColor='white' width='1024px' padding='24px' borderRadius='12px' >
          {stepConfigs[stepIndex].render({
            onClickPrevious: back,
            onClickNext: forward,
            previousTitle: stepIndex !== 0 ? stepConfigs[stepIndex - 1].title : undefined,
            nextTitle: stepIndex !== stepConfigs.length - 1 ? stepConfigs[stepIndex + 1].title : undefined,
            currentStep: stepIndex + 1,
            numOfStep: stepConfigs.length
          })}
        </Box>
      </Center>
    </RecoilRoot>
  )
}
