import { atom } from 'recoil'
import { AtomKeys } from '../../atomKeys'

export type StepInfo = {
  currentIndex: number
}

export const defaultStepInfoState: StepInfo = {
  currentIndex: 0
}

export const stepInfoState = atom<StepInfo>({
  key: AtomKeys.StepInfo,
  default: defaultStepInfoState
})