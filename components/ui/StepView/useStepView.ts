import { useStepInfoRecoilStates } from '../../../recoil'

export type StepConfig = {
  title: string
}

export type useStepViewProps = {
  configs: StepConfig[]
}

export const useStepView = ({ configs }: useStepViewProps) => {
  const { stepInfo, setStepInfo } = useStepInfoRecoilStates()
  const { currentIndex } = stepInfo

  const isFirstStep = currentIndex === 0
  const isLastStep = currentIndex === configs.length  - 1

  const backward = () => {
    setStepInfo({ ...stepInfo, currentIndex: currentIndex - 1 })
  }

  const forward = () => {
    setStepInfo({ ...stepInfo, currentIndex: currentIndex + 1 })
  }

  return {
    currentIndex,
    title: configs[currentIndex].title,
    previousTitle: !isFirstStep ? configs[currentIndex - 1].title : undefined,
    nextTitle: !isLastStep ? configs[currentIndex + 1].title : undefined,
    numOfStep: configs.length,
    backward: !isFirstStep ? backward : undefined,
    forward: !isLastStep ? forward : undefined
  }
}