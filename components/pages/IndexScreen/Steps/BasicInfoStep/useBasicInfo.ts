import { useForm } from 'react-hook-form'
import { usePersonalInfoRecoilStates } from '../../../../../recoil'

export const useBasicInfo = () => {
  const { basicInfo, setBasicInfo } = usePersonalInfoRecoilStates()

  const methods = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: basicInfo.name,
      job: basicInfo.job,
      birthday: basicInfo.birthday
    },
    // FIXME
    resolver: undefined
  })

  return {
    methods
  }
}