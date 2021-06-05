import { atom } from 'recoil'
import { AtomKeys } from '../../atomKeys'

export type SelfIntroduction = {
  sports: string | null
  book: string | null
  tv: string | null
  movie: string | null
  webService: string | null
}

export const defaultSelfIntroductionState: SelfIntroduction = {
  sports: null,
  book: null,
  tv: null,
  movie: null,
  webService: null
}

export const selfIntroductionState = atom<SelfIntroduction>({
  key: AtomKeys.Personal_Info_SelfIntroduction,
  default: defaultSelfIntroductionState
})