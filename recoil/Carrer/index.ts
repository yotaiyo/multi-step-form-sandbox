import { useRecoilState } from 'recoil'
import { carrerState } from './atoms'

export const useCarrerRecoilStates = () => {
  const [carrer, setCarrer] = useRecoilState(carrerState)

  return {
    carrer,
    setCarrer
  }
}