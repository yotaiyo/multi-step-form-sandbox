import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useUserInfoRecoilStates } from '../../../../../../recoil'

const schema = yup.object().shape({
  name: yup.string().required('お名前を入力してください'),
  nameKana: yup.string().required('ふりがなを入力してください'),
  birthDayYear: yup.string().required('生年月日を入力してください'),
  birthDayMonth: yup.string().required('生年月日を入力してください'),
  birthDayDay: yup.string().required('生年月日を入力してください')
})

type useBasicInfoType = {
  stepIndex: number
  stepErrors: boolean[]
  setStepErrors: React.Dispatch<React.SetStateAction<boolean[]>>
}

export const useBasicInfo = ({ stepIndex, stepErrors, setStepErrors }: useBasicInfoType) => {
  const { basicInfo, setBasicInfo } = useUserInfoRecoilStates()

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
    setStepErrors(stepErrors.map((error, index) => {
      return (
        index === stepIndex ? !methods.formState.isValid : error
      )
    }))
  }, [methods.formState.isValid])

  return {
    methods,
    setValues
  }
}