import { atom } from 'recoil'
import { AtomKeys } from '../../atomKeys'

export type SelfIntroduction = {
  mobileNumber: string | null
  postalCode: string | null
  prefecture: string | null
  city: string | null
  block: string | null
  building: string | null
  nearestStation: string | null
  website: string | null
  // FIXME
  // socialLink: string[] | null
}

export const defaultSelfIntroductionState: SelfIntroduction = {
  mobileNumber: null,
  postalCode: null,
  prefecture: null,
  city: null,
  block: null,
  building: null,
  nearestStation: null,
  website: null
}

export const selfIntroductionState = atom<SelfIntroduction>({
  key: AtomKeys.Personal_Info_SelfIntroduction,
  default: defaultSelfIntroductionState
})