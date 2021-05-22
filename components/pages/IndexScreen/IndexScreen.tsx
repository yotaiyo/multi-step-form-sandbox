import React, { useState } from 'react'
import { Center, Box } from '@chakra-ui/react'
import { BasicInfoStep } from './Steps/BasicInfoStep'
import { AddressStep } from './Steps/AddressStep'
import { QuestionStep } from './Steps/QuestionStep'
import { StepView } from '../../ui'

const stepInfos = [
  {
    title: '個人情報入力',
    children: <BasicInfoStep />
  },
  {
    title: '住所入力',
    children: <AddressStep />
  },
  {
    title: 'いくつかの質問に回答してください',
    children: <QuestionStep />
  }
]

export const IndexScreen = () => {
  const [stepIndex, setStepIndex] = useState(0)

  const onClickPrevious = () => {
    setStepIndex(stepIndex - 1)
  }

  const onClickNext = () => {
    setStepIndex(stepIndex + 1)
  }

  return (
    <Center>
      <Box backgroundColor='white' width='1024px' padding='24px' borderRadius='12px' >
        <StepView
          title={stepInfos[stepIndex].title}
          currentStep={stepIndex + 1}
          numOfStep={stepInfos.length}
          previousTitle={stepIndex !== 0 ? stepInfos[stepIndex - 1].title : undefined}
          nextTitle={stepIndex !== stepInfos.length - 1 ? stepInfos[stepIndex + 1].title : undefined}
          onClickPrevious={onClickPrevious}
          onClickNext={onClickNext}
        >
          {stepInfos[stepIndex].children}
        </StepView>
      </Box>
    </Center>
  )
}
