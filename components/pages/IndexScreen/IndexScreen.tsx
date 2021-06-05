import React from 'react'
import { Center, Box } from '@chakra-ui/react'
import { StepConfig } from '../../ui'
import { BasicInfoStep } from './Steps/BasicInfoStep'
import { CarrerStep } from './Steps/CarrerStep'
import { ContactInfoStep } from './Steps/ContactInfoStep'
import { SelfIntroductionStep } from './Steps/SelfIntroductionStep'
import { useStepInfoRecoilStates } from '../../../recoil'

const stepConfigs: StepConfig[] = [
  {
    title: '基本情報',
  },
  {
    title: '職業',
  },
  {
    title: '連絡先',
  },
  {
    title: '自己紹介',
  }
]

const stepComponents = [
  <BasicInfoStep configs={stepConfigs} />,
  <CarrerStep configs={stepConfigs} />,
  <ContactInfoStep configs={stepConfigs} />,
  <SelfIntroductionStep configs={stepConfigs} />
]

export const IndexScreen = () => {
  const { stepInfo } = useStepInfoRecoilStates()

  return (
    <Center>
      <Box backgroundColor='white' width='1024px' padding='24px' borderRadius='12px' >
        {stepComponents[stepInfo.currentIndex]}
      </Box>
    </Center>
  )
}
