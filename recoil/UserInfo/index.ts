import { useRecoilState } from 'recoil'
import {
  basicInfoState,
  carrerState,
  contactInfoState,
  selfIntroductionState
} from './atoms'

export const useUserInfoRecoilStates = () => {
  const [basicInfo, setBasicInfo] = useRecoilState(basicInfoState)
  const [carrer, setCarrer] = useRecoilState(carrerState)
  const [contactInfo, setContactInfo] = useRecoilState(contactInfoState)
  const [selfIntroduction, setSelfIntroduction] = useRecoilState(selfIntroductionState)

  return {
    basicInfo,
    carrer,
    contactInfo,
    selfIntroduction,

    setBasicInfo,
    setCarrer,
    setContactInfo,
    setSelfIntroduction
  }
}