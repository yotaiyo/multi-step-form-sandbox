import { useRecoilState } from 'recoil'
import { stepInfoState } from './atoms'

export const useStepInfoRecoilStates = () => {
  const [stepInfo, setStepInfo] = useRecoilState(stepInfoState)

  return {
    stepInfo,
    setStepInfo
  }
}
