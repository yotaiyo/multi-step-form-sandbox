import { atom } from 'recoil'
import { AtomKeys } from '../../atomKeys'

export type BasicInfo = {
  name: string | null
  nameKana: string | null
  birthDayYear: number | null
  birthDayMonth: number | null
  birthDayDay: number | null
  gender: 'man' | 'woman' | 'other' | 'unanswered' | null
  country: string | null
  birthPlace: string | null
  language: string | null
  // FIXME
  // skills: string[] | null
}

export const defaultBasicInfoState: BasicInfo = {
  name: null,
  nameKana: null,
  birthDayYear: null,
  birthDayMonth: null,
  birthDayDay: null,
  gender: null,
  country: null,
  birthPlace: null,
  language: null,
}

export const basicInfoState = atom<BasicInfo>({
  key: AtomKeys.UserInfo_BasicInfo,
  default: defaultBasicInfoState
})