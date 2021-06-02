import { atom } from 'recoil'
import { AtomKeys } from '../../atomKeys'

export type Background = {
  career: {
    position: string | null
    employmentStatus: string | null
    companyName: string | null
    place: string | null
    startDateYear: number | null
    startDateMonth: number | null
    endDateYear: number | null
    endDateMonth: number | null
    description: string | null
  }
}

export const defaultBackgroundState: Background = {
  career: {
    position: null,
    employmentStatus: null,
    companyName: null,
    place: null,
    startDateYear: null,
    startDateMonth: null,
    endDateYear: null,
    endDateMonth: null,
    description: null
  }
}

export const backgroundState = atom<Background>({
  key: AtomKeys.Personal_Info_Background,
  default: defaultBackgroundState
})