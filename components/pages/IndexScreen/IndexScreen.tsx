import React from 'react'
import { Center, Box } from '@chakra-ui/react'
import { StepView, useStepView, StepConfig } from '../../ui'
import { BasicInfoStep, useBasicInfo } from './Steps/BasicInfoStep'
import { CarrerStep, useCarrer } from './Steps/CarrerStep'
import { ContactInfoStep, useContactInfo } from './Steps/ContactInfoStep'
import { SelfIntroductionStep, useSelfIntroduction } from './Steps/SelfIntroductionStep'

export const IndexScreen = () => {
  const stepConfigs: StepConfig[] = [
    {
      title: '基本情報',
      children: <BasicInfoStep />,
      onClickPrevious: useBasicInfo().setValues,
      onClickNext: useBasicInfo().setValues
    },
    {
      title: '職業',
      children: <CarrerStep />,
      onClickPrevious: useCarrer().setValues,
      onClickNext: useCarrer().setValues
    },
    {
      title: '連絡先',
      children: <ContactInfoStep />,
      onClickPrevious: useContactInfo().setValues,
      onClickNext: useContactInfo().setValues
    },
    {
      title: '自己紹介',
      children: <SelfIntroductionStep />,
      onClickPrevious: useSelfIntroduction().setValues,
      onClickNext: useSelfIntroduction().setValues
    }
  ]

  const {
    title,
    currentStep,
    numOfStep,
    children,
    previousTitle,
    nextTitle,
    onClickPrevious,
    onClickNext
  } = useStepView({ configs: stepConfigs })

  return (
    <Center>
      <Box backgroundColor='white' width='1024px' padding='24px' borderRadius='12px' >
        <StepView
          title={title}
          currentStep={currentStep}
          numOfStep={numOfStep}
          previousTitle={previousTitle}
          nextTitle={nextTitle}
          onClickPrevious={onClickPrevious}
          onClickNext={onClickNext}
        >
          {children}
        </StepView>
      </Box>
    </Center>
  )
}
