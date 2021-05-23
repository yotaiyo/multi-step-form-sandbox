import { useRecoilState } from 'recoil'
import { basicInfoState } from './atoms'

export const usePersonalInfoRecoilStates = () => {
  const [basicInfo, setBasicInfo] = useRecoilState(basicInfoState)

  return {
    basicInfo,
    setBasicInfo
  }
}