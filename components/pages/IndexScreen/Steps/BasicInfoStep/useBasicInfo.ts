import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useBasicInfoRecoilStates } from '../../../../../recoil'

const schema = yup.object().shape({
  name: yup.string().required('お名前を入力してください'),
  nameKana: yup.string().required('ふりがなを入力してください')
})


export const useBasicInfo = () => {
  const { basicInfo, setBasicInfo } = useBasicInfoRecoilStates()

  const methods = useForm({
    mode: 'onBlur',
    defaultValues: basicInfo,
    resolver: yupResolver(schema)
  })

  const setValues = () => {
    // FIXME
    if (!methods.formState.isValid) {
      console.log('エラーがあります')
    }

    const values = methods.getValues()
    setBasicInfo(values)
  }

  React.useEffect(() => {
    // FIXME
    if (!methods.formState.isValid) {
      console.log('エラーがあります')
    }
  }, [methods.formState.isValid])

  return {
    methods,
    setValues
  }
}