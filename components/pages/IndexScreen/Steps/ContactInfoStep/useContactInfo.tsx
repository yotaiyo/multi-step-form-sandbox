import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useContactInfoRecoilStates } from '../../../../../recoil'

const schema = yup.object().shape({
  mobilePhone: yup.string().required('電話番号を入力してください'),
  postalCode: yup.string()
    .min(6, 'ハイフンなしの6桁で郵便番号を入力してください')
    .max(6, 'ハイフンなしの6桁で郵便番号を入力してください')
    .required('郵便番号を入力してください'),
  prefecture: yup.string().required('都道府県を入力してください'),
  city: yup.string().required('市区町村を入力してください')
})

export const useContactInfo = () => {
  const { contactInfo, setContactInfo } = useContactInfoRecoilStates()

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
    // FIXME
  }, [methods.formState.isValid])

  return {
    methods,
    setValues
  }
}