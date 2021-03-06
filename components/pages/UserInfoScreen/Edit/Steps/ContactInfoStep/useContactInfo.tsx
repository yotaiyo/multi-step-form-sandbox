import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useUserInfoRecoilStates } from '../../../../../../recoil'

const schema = yup.object().shape({
  mobilePhone: yup.string().required('電話番号を入力してください'),
  postalCode: yup.string()
    .min(7, 'ハイフンなしの7桁で郵便番号を入力してください')
    .max(7, 'ハイフンなしの7桁で郵便番号を入力してください'),
  prefecture: yup.string().required('都道府県を入力してください'),
  city: yup.string().required('市区町村を入力してください')
})

type useContactInfoType = {
  stepIndex: number
  stepErrors: boolean[]
  setStepErrors: React.Dispatch<React.SetStateAction<boolean[]>>
}

export const useContactInfo = ({ stepIndex, stepErrors, setStepErrors }: useContactInfoType) => {
  const { contactInfo, setContactInfo } = useUserInfoRecoilStates()

  const methods = useForm({
    mode: 'onBlur',
    defaultValues: contactInfo,
    resolver: yupResolver(schema)
  })

  const setValues = () => {
    const values = methods.getValues()
    setContactInfo(values)
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