import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Center, Box } from '@chakra-ui/react'
import { DefaultStepProps } from './Steps/types'
import { BasicInfoStep,  } from './Steps/BasicInfoStep'
import { CarrerStep } from './Steps/CarrerStep'
import { ContactInfoStep } from './Steps/ContactInfoStep'
import { SelfIntroductionStep } from './Steps/SelfIntroductionStep'

type StepConfig = {
  title: string
  render: (props: DefaultStepProps) => React.ReactNode
}

const stepConfigs: StepConfig[] = [
  {
    title: '基本情報',
    render: (props) => {
      return (
        <BasicInfoStep {...props} />
      )
    }
  },
  {
    title: '職業',
    render: (props) => {
      return (
        <CarrerStep {...props} />
      )
    }
  },
  {
    title: '連絡先',
    render: (props) => {
      return (
        <ContactInfoStep {...props} />
      )
    }
  },
  {
    title: '自己紹介',
    render: (props) => {
      return (
        <SelfIntroductionStep {...props} />
      )
    }
  }
]

type UserInfoEditScreenProps = {
  id: string
}

export const UserInfoEditScreen: React.FC<UserInfoEditScreenProps> = ({
  id
}) => {
  const router = useRouter()

  const [stepIndex, setStepIndex] = useState(0)
  const [stepErrors, setStepErrors] = useState(
    Array.from({ length: stepConfigs.length }, () => true)
  )

  const backward = () => {
    setStepIndex(stepIndex - 1)
  }

  const forward = () => {
    setStepIndex(stepIndex + 1)
  }

  const onClickConfirmButton = () => {
    router.push(`/users/${id}/confirm`)
  }

  return (
    <Center>
      <Box backgroundColor='white' width='1024px' padding='6' borderRadius='8' >
        {stepConfigs[stepIndex].render({
          stepIndex,
          setStepIndex,
          stepTitles: stepConfigs.map(config => config.title),
          stepErrors,
          setStepErrors,
          onClickPrevious: backward,
          onClickNext: forward,
          onClickConfirmButton
        })}
      </Box>
    </Center>
  )
}
