import { useRecoilState } from 'recoil'
import { backgroundState } from './atoms'

export const useBackgroundRecoilStates = () => {
  const [background, setBackground] = useRecoilState(backgroundState)

  return {
    background,
    setBackground
  }
}