import {
  useBasicInfoRecoilStates,
  useCarrerRecoilStates,
  useContactInfoRecoilStates,
  useSelfIntroductionRecoilStates
} from '../../../../recoil'

export const useUserInfoConfirmScreen = () => {
  const { basicInfo } = useBasicInfoRecoilStates()
  const { carrer } = useCarrerRecoilStates()
  const { contactInfo } = useContactInfoRecoilStates()
  const { selfIntroduction } = useSelfIntroductionRecoilStates()

  return {
    basicInfo,
    carrer,
    contactInfo,
    selfIntroduction
  }
}