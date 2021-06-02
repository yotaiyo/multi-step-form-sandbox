import { useRecoilState } from 'recoil'
import { basicInfoState } from './atoms'

export const useBasicInfoRecoilStates = () => {
  const [basicInfo, setBasicInfo] = useRecoilState(basicInfoState)

  return {
    basicInfo,
    setBasicInfo
  }
}