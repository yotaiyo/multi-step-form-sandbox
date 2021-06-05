import React, { useState } from 'react'
import { RecoilRoot } from 'recoil'
import { Center, Box } from '@chakra-ui/react'
import { DefaultStepProps } from './Steps/types'
import { BasicInfoStep,  } from './Steps/BasicInfoStep'
import { CarrerStep } from './Steps/CarrerStep'
import { AddressStep } from './Steps/AddressStep'
import { QuestionStep } from './Steps/QuestionStep'

type StepConfig = {
  title: string
  render: (props: DefaultStepProps) => React.ReactNode
}

const stepConfigs: StepConfig[] = [
  {
    title: '基本情報入力',
    render: (props) => {
      return (
        <BasicInfoStep {...props} />
      )
    }
  },
  {
    title: '職業を教えてください',
    render: (props) => {
      return (
        <CarrerStep {...props} />
      )
    }
  },
  {
    title: '住所',
    render: (props) => {
      return (
        <AddressStep {...props} />
      )
    }
  },
  {
    title: 'いくつかの質問に答えてください',
    render: (props) => {
      return (
        <QuestionStep {...props} />
      )
    }
  }
]


export const IndexScreen = () => {
  const [stepIndex, setStepIndex] = useState(0)

  const backward = () => {
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
            title: stepConfigs[stepIndex].title,
            onClickPrevious: backward,
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
