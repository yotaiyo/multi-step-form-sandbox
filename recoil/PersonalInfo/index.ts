import { useRecoilState } from 'recoil'
import { basicInfoState } from './atoms'

export const usePersonalInfo = () => {
  const [basicInfo, setBasicInfo] = useRecoilState(basicInfoState)

  return {
    basicInfo,
    setBasicInfo
  }
}