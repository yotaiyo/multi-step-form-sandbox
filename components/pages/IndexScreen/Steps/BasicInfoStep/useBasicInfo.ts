import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useBasicInfoRecoilStates } from '../../../../../recoil'

const schema = yup.object().shape({
  name: yup.string().required('お名前は必須項目です'),
  nameKana: yup.string().required('ふりがなは必須項目です')
})


export const useBasicInfo = () => {
  const { basicInfo, setBasicInfo } = useBasicInfoRecoilStates()

  const methods = useForm({
    mode: 'onBlur',
    defaultValues: basicInfo,
    resolver: yupResolver(schema)
  })

  const setValues = () => {
    const values = methods.getValues()
    setBasicInfo(values)
  }

  React.useEffect(() => {
    // FIXME
  }, [methods.formState.isValid])

  return {
    methods,
    setValues
  }
}