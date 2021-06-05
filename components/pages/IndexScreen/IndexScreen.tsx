import React from 'react'
import { Center, Box } from '@chakra-ui/react'
import { StepView, StepConfig } from '../../ui'
import { BasicInfoStep } from './Steps/BasicInfoStep'
import { CarrerStep } from './Steps/CarrerStep'
import { ContactInfoStep } from './Steps/ContactInfoStep'
import { SelfIntroductionStep } from './Steps/SelfIntroductionStep'

export const IndexScreen = () => {
  const stepConfigs: StepConfig[] = [
    {
      title: '基本情報',
      children: <BasicInfoStep />
    },
    {
      title: '職業',
      children: <CarrerStep />
    },
    {
      title: '連絡先',
      children: <ContactInfoStep />
    },
    {
      title: '自己紹介',
      children: <SelfIntroductionStep />
    }
  ]

  return (
    <Center>
      <Box backgroundColor='white' width='1024px' padding='24px' borderRadius='12px' >
        <StepView configs={stepConfigs} />
      </Box>
    </Center>
  )
}
