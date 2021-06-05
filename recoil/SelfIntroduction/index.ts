import { useRecoilState } from 'recoil'
import { selfIntroductionState } from './atoms'

export const useSelfIntroductionRecoilStates = () => {
  const [selfIntroduction, setSelfIntroduction] = useRecoilState(selfIntroductionState)

  return {
    selfIntroduction,
    setSelfIntroduction
  }
}