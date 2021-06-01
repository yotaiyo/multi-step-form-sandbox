import { atom } from 'recoil'
import { AtomKeys } from '../../atomKeys'

export type BasicInfo = {
  name?: string
  nameKana?: string
  birthDay?: Date
  gender?: 'man' | 'woman' | 'other' | 'unanswered'
  country?: string
  birthPlace?: string
  language?: string
  company?: string
  // businessCategories?: string[]
  // skills?: string[]
}

export const defaultBasicInfoState: BasicInfo = {
  name: undefined,
  nameKana: undefined,
  birthDay: undefined,
  gender: undefined,
  country: undefined,
  birthPlace: undefined,
  language: undefined,
  company: undefined
}

export const basicInfoState = atom<BasicInfo>({
  key: AtomKeys.Personal_Info_BasicInfo,
  default: defaultBasicInfoState
})