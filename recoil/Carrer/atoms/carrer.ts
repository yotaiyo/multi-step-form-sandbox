import { atom } from 'recoil'
import { AtomKeys } from '../../atomKeys'

export type Carrer = {
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

export const defaultCarrerState: Carrer = {
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

export const carrerState = atom<Carrer>({
  key: AtomKeys.User_Info_Carrer,
  default: defaultCarrerState
})