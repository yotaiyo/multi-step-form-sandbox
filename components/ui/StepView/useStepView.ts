import React, { useState } from 'react'

export type StepConfig = {
  title: string
  children: React.ReactNode
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
    stepIndex,
    title: configs[stepIndex].title,
    children: configs[stepIndex].children,
    previousTitle: !isFirstStep ? configs[stepIndex - 1].title : undefined,
    nextTitle: !isLastStep ? configs[stepIndex + 1].title : undefined,
    numOfStep: configs.length,
    backward: !isFirstStep ? backward : undefined,
    forward: !isLastStep ? forward : undefined
  }
}