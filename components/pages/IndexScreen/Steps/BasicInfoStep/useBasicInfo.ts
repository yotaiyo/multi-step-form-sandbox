import { useForm } from 'react-hook-form'
import { useBasicInfoRecoilStates } from '../../../../../recoil'


export const useBasicInfo = () => {
  const { basicInfo, setBasicInfo } = useBasicInfoRecoilStates()

  const methods = useForm({
    mode: 'onBlur',
    defaultValues: basicInfo,
    // FIXME
    resolver: undefined
  })

  const setValues = () => {
    const values = methods.getValues()
    setBasicInfo(values)
  }

  return {
    methods,
    setValues
  }
}