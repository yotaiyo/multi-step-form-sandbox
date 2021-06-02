import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useBackgroundRecoilStates } from '../../../../../recoil'

const schema = yup.object().shape({
  name: yup.string().required('お名前は必須項目です'),
  nameKana: yup.string().required('ふりがなは必須項目です')
})


export const useBackground = () => {
  const { background, setBackground } = useBackgroundRecoilStates()

  const methods = useForm({
    mode: 'onBlur',
    defaultValues: background,
    resolver: yupResolver(schema)
  })

  const setValues = () => {
    const values = methods.getValues()
    setBackground(values)
  }

  React.useEffect(() => {
    // FIXME
  }, [methods.formState.isValid])

  return {
    methods,
    setValues
  }
}