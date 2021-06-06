import { atom } from 'recoil'
import { AtomKeys } from '../../atomKeys'

export type ContactInfo = {
  mobilePhone: string | null
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

export const defaultContactInfoState: ContactInfo = {
  mobilePhone: null,
  postalCode: null,
  prefecture: null,
  city: null,
  block: null,
  building: null,
  nearestStation: null,
  website: null
}

export const contactInfoState = atom<ContactInfo>({
  key: AtomKeys.User_Info_ContactInfo,
  default: defaultContactInfoState
})