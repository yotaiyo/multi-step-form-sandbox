import React from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { usePersonalInfoRecoilStates } from '../../../../../recoil'
import { useDebounce } from '../../../../../hooks'


export const useBasicInfo = () => {
  const { basicInfo, setBasicInfo } = usePersonalInfoRecoilStates()

  const methods = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: basicInfo.name,
      job: basicInfo.job,
    },
    // FIXME
    resolver: undefined
  })

  const values = useWatch({ control: methods.control })
  const debouncedValue = useDebounce(values, 500)

  React.useEffect(() => {
    // FIXME: 変更を加えた値のみ更新したい
    setBasicInfo(debouncedValue)
  }, [debouncedValue])

  return {
    methods
  }
}