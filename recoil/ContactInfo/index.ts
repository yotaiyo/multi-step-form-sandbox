import { useRecoilState } from 'recoil'
import { contactInfoState } from './atoms'

export const useContactInfoRecoilStates = () => {
  const [contactInfo, setContactInfo] = useRecoilState(contactInfoState)

  return {
    contactInfo,
    setContactInfo
  }
}