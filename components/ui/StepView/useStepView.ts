import React, { useState } from 'react'

export type StepConfig = {
  title: string
  children: React.ReactNode
  onClickPrevious: () => void
  onClickNext: () => void
}

export type useStepViewProps = {
  configs: StepConfig[]
}

export const useStepView = ({ configs }: useStepViewProps) => {
  const [stepIndex, setStepIndex] = useState(0)

  const isFirstStep = stepIndex === 0
  const isLastStep = stepIndex === configs.length  - 1

  const backward = () => {
    setStepIndex(stepIndex - 1)
  }

  const forward = () => {
    setStepIndex(stepIndex + 1)
  }

  return {
    title: configs[stepIndex].title,
    children: configs[stepIndex].children,
    currentStep: stepIndex + 1,
    previousTitle: !isFirstStep ? configs[stepIndex - 1].title : undefined,
    nextTitle: !isLastStep ? configs[stepIndex + 1].title : undefined,
    numOfStep: configs.length,
    onClickPrevious: () => {
      !isFirstStep && backward()
      configs[stepIndex].onClickPrevious()
    },
    onClickNext: () => {
      !isLastStep && forward()
      configs[stepIndex].onClickNext()
    }
  }
}