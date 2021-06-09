import {
  useUserInfoRecoilStates
} from '../../../../recoil'

export const useUserInfoConfirmScreen = () => {
  const { basicInfo, carrer, contactInfo, selfIntroduction } = useUserInfoRecoilStates()

  return {
    basicInfo,
    carrer,
    contactInfo,
    selfIntroduction
  }
}