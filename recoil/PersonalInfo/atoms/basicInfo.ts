import { atom } from 'recoil'
import { AtomKeys } from '../../atomKeys'

export type BasicInfo = {
  name?: string
  job?: string
  birthday?: Date
}

export const defaultBasicInfoState = {
  name: undefined,
  job: undefined,
  birthday: undefined
}

export const basicInfoState = atom<BasicInfo>({
  key: AtomKeys.Personal_Info_BasicInfo,
  default: defaultBasicInfoState
})